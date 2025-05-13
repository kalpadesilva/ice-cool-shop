package com.icecool.icecoolshop.dto;

public class Condiment {
    private String condimentName;
    private Integer count;

    public String getCondimentName() {
        return condimentName;
    }

    public void setCondimentName(String condimentName) {
        this.condimentName = condimentName;
    }

    public Integer getCount() {
        return count;
    }

    public void setCount(Integer count) {
        this.count = count;
    }

    @Override
    public String toString() {
        return "Condiment{" +
                "condimentName='" + condimentName + '\'' +
                ", count=" + count +
                '}';
    }
}
