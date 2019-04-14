package au.edu.mq.mqremote;

import spark.Spark;

import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        Spark.get("/WakeOnLan", (req, res) -> {
            System.out.println("Wake on Lan: " + req.queryParams("room"));
            doAction(true);
            return "Wake on Lan: " + req.queryParams("room");
        });
        Spark.get("/Shutdown", (req, res) -> {
            System.out.println("Shutdown: " + req.queryParams("room"));
            doAction(false);
            return "Shutdown: " + req.queryParams("room");
        });
    }

    public static void doAction(Boolean mode) {
        List<Computer> list = new ArrayList<>();

        String FILE_URL = "https://www.dropbox.com/s/ufs7o5e9s3nf367/list.txt?dl=1";
        BufferedInputStream inputStream = null;
        try {
            inputStream = new BufferedInputStream(new URL(FILE_URL).openStream());
        } catch (Exception e) {
            e.printStackTrace();
        }
        BufferedReader reader = null;
        try {
            reader = new BufferedReader(new InputStreamReader(inputStream, "UTF-8"));
        } catch (Exception e) {
            e.printStackTrace();
        }
        String text;
        try {
            while ((text = reader.readLine()) != null) {
                String[] split = text.split(",");
                String ip = split[0];
                String mac = split[1];
                Computer computer = new Computer(ip, mac);
                list.add(computer);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        if(mode) {
            ///Wake on lan
            for (Computer computer : list) {
                System.out.println(computer.mac);
                WakeOnLan.Wake(computer.mac, "10.41.79.255");
            }
        } else {
            //Shutdown
            for (Computer computer : list) {
                System.out.println(computer.ip);
                try {
                    Process child = Runtime.getRuntime().exec("shutdown /s /m \\\\" + computer.ip + " /t 0");
                } catch (Exception e)
                {
                    e.printStackTrace();
                }
            }
        }
    }
}