package com.mqremote;

import android.content.Context;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

import java.io.*;
import java.net.*;
import java.util.ArrayList;
import java.util.List;

public class Wol extends ReactContextBaseJavaModule  {
    private static Boolean isOn = false;
    public Wol(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @ReactMethod
    public void getStatus(
            Callback successCallback) {
        successCallback.invoke(null, isOn);
        getReactApplicationContext().getSystemService(Context.CONNECTIVITY_SERVICE);
    }

    @ReactMethod
    public void turnOn() {
        isOn = true;
        System.out.println("Wol is turn ON");
    }
    @ReactMethod
    public void turnOff() {
        isOn = false;
        System.out.println("Wol is turn OFF");
    }

    @Override
    public String getName() {
        return "Wol";
    }

    //-------------NEW------------------
    @ReactMethod
    public static void Start() {
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
        try
        {
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
        for(Computer computer : list)
        {
            Wol.Wake(computer.mac, computer.ip);
        }
    }

    static final int PORT = 9;

    public static void Wake(String mac, String ip) {

        String ipStr = ip;
        String macStr = mac;

        try {
            byte[] macBytes = getMacBytes(macStr);
            byte[] bytes = new byte[6 + 16 * macBytes.length];
            for (int i = 0; i < 6; i++) {
                bytes[i] = (byte) 0xff;
            }
            for (int i = 6; i < bytes.length; i += macBytes.length) {
                System.arraycopy(macBytes, 0, bytes, i, macBytes.length);
            }

            InetAddress address = InetAddress.getByName(ipStr);
            DatagramPacket packet = new DatagramPacket(bytes, bytes.length, address, PORT);
            DatagramSocket socket = new DatagramSocket();
            System.out.println(mac + " " + ip);
            socket.send(packet);
            socket.close();

            System.out.println("Wake-on-LAN packet sent.");
        }
        catch (Exception e) {
            System.out.println("Failed to send Wake-on-LAN packet: " + e.toString());
            System.exit(1);
        }

    }

    private static byte[] getMacBytes(String macStr) throws IllegalArgumentException {
        byte[] bytes = new byte[6];
        String[] hex = macStr.split("([:-])");
        if (hex.length != 6) {
            throw new IllegalArgumentException("Invalid MAC address.");
        }
        try {
            for (int i = 0; i < 6; i++) {
                bytes[i] = (byte) Integer.parseInt(hex[i], 16);
            }
        }
        catch (NumberFormatException e) {
            throw new IllegalArgumentException("Invalid hex digit in MAC address.");
        }
        return bytes;
    }
}

class Computer {
    Computer(String ip, String mac)
    {
        this.ip = ip;
        this.mac = mac;
    }
    String ip;
    String mac;
}