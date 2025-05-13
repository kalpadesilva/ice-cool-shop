package com.icecool.icecoolshop.dto;

import java.util.Dictionary;
import java.util.List;

public class PriceRequest {
    private String container;
    private String base;
    private Integer scoops;
    private List<Condiment> condiments;

    public PriceRequest() {
    }

    public PriceRequest(String container, String base, Integer scoops, List<Condiment> condiments) {
        this.container = container;
        this.base = base;
        this.scoops = scoops;
        this.condiments = condiments;
    }

    public String getContainer() {
        return container;
    }

    public void setContainer(String container) {
        this.container = container;
    }

    public String getBase() {
        return base;
    }

    public void setBase(String base) {
        this.base = base;
    }

    public Integer getScoops() {
        return scoops;
    }

    public void setScoops(Integer scoops) {
        this.scoops = scoops;
    }

    public List<Condiment> getCondiments() {
        return condiments;
    }

    public void setCondiments(List<Condiment> condiments) {
        this.condiments = condiments;
    }

    @Override
    public String toString() {
        return "PriceRequest{" +
                "container='" + container + '\'' +
                ", base='" + base + '\'' +
                ", scoops=" + scoops +
                ", condiments=" + condiments +
                '}';
    }
}
