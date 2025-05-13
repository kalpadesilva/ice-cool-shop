package com.icecool.icecoolshop.dto;

public class PriceResponse {
    private Boolean isValid;
    private Double price;
    private String message;

    public PriceResponse() {
    }

    public PriceResponse(Boolean isValid, Double price, String message) {
        this.isValid = isValid;
        this.price = price;
        this.message = message;
    }

    public Boolean getValid() {
        return isValid;
    }

    public void setValid(Boolean valid) {
        isValid = valid;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
