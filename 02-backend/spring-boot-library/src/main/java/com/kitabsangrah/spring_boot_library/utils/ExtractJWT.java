package com.kitabsangrah.spring_boot_library.utils;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.Base64;
import java.util.Map;

public class ExtractJWT {

    public static String payloadJWTExtraction(String token, String extraction) {
        try {
            // Properly remove "Bearer " if present
            if (token.startsWith("Bearer ")) {
                token = token.substring(7);
            }

            // JWT consists of 3 parts: header.payload.signature
            String[] chunks = token.split("\\.");
            if (chunks.length < 2) return null;

            Base64.Decoder decoder = Base64.getUrlDecoder();
            String payloadJson = new String(decoder.decode(chunks[1]));

            // Use Jackson to parse JSON string into Map
            ObjectMapper mapper = new ObjectMapper();
            Map<String, Object> payloadMap = mapper.readValue(payloadJson, Map.class);

            Object value = payloadMap.get(extraction);
            return value != null ? value.toString() : null;

        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}
