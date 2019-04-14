package com.mqremote;

import android.content.Context;
import android.util.Log;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;

import java.util.logging.Logger;

public class Wol extends ReactContextBaseJavaModule  {
    private static Boolean isOn = false;
    static RequestQueue requestQueue;
    static String URL = "http://10.41.73.22:4567/";
    ReactApplicationContext reactContext;

    public Wol(ReactApplicationContext reactContext) {
        super(reactContext);
        requestQueue = Volley.newRequestQueue(getReactApplicationContext().getApplicationContext());
    }

    @Override
    public String getName() {
        return "Wol";
    }

    //-------------NEW------------------
    @ReactMethod
    public static void Start(String room, Boolean toggled) {
        String mode;
        if(toggled)
            mode = "WakeOnLan";
        else
            mode = "Shutdown";
        String preparedURL = URL + mode + "?room=" + room;
        StringRequest request = new StringRequest(Request.Method.GET, preparedURL, new Response.Listener<String>() {
            @Override
            public void onResponse(String response) {
                System.out.println(response);
            }
        }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                error.printStackTrace();
            }
        });
        requestQueue.add(request);
    }
}