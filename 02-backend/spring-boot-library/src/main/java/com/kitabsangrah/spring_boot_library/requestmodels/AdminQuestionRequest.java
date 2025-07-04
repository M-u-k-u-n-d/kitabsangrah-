package com.kitabsangrah.spring_boot_library.requestmodels;

public class AdminQuestionRequest {

    private Long id;
    private String response;

    public AdminQuestionRequest() {
    }

    public AdminQuestionRequest(Long id, String response) {
        this.id = id;
        this.response = response;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getResponse() {
        return response;
    }

    public void setResponse(String response) {
        this.response = response;
    }
}
