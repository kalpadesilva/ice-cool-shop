package com.icecool.icecoolshop.controller;

import com.icecool.icecoolshop.dto.Condiment;
import com.icecool.icecoolshop.dto.PriceRequest;
import com.icecool.icecoolshop.dto.PriceResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Dictionary;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class PriceController {

    public static final String RASPBERRY_SLUSHY = "Raspberry Slushy";
    public static final String NUTTY_FRUITY = "Nutty Fruity";
    public static final String PISTACHIO_DELIGHT = "Pistachio Delight";
    public static final String COCO_COFFEE = "Coco Coffee";
    public static final String SPRINKLES = "Sprinkles";
    public static final String TOASTED_MARSHMALLOW = "Toasted Marshmallow";
    public static final String TOASTED_ALMOND_FLAKES = "Toasted Almond Flakes";
    public static final String PEANUT_BUTTER = "Peanut Butter";
    public static final String OREO_CRUMBLES = "Oreo Crumbles";
    public static final String DRIED_APPLES = "Dried Apples";
    public static final String DRIED_MANGO = "Dried Mango";
    public static final String DRIED_APRICOT = "Dried Apricot";
    public static final String DRIED_BLUEBERRY = "Dried Blueberry";
    public static final String WAFER_CONE = "Wafer Cone";
    public static final String WAFFLE_CONE = "Waffle Cone";
    public static final String WAFFLE_BOWL = "Waffle Bowl";
    public static final String ICE_CREAM_SANDWICH_WAFERS = "Ice Cream Sandwich Wafers";

    @GetMapping("calc_price")
    public PriceResponse calcPrice(@RequestBody PriceRequest priceRequest){
        String base = priceRequest.getBase();
        int scoops = priceRequest.getScoops();
        List<Condiment> condiments = priceRequest.getCondiments();
        String container = priceRequest.getContainer();
        double price = 0.00;
        boolean isValid = true;
        String message=null;

        // HashMap of base prices
        Map<String,Integer> basePrices = Map.of(
          RASPBERRY_SLUSHY,200,
          COCO_COFFEE,350,
          NUTTY_FRUITY,150,
          PISTACHIO_DELIGHT,350
        );

        // HashMap of compatible bases and condiments
        Map<String, List<String>> compatibleBases = Map.of(
                SPRINKLES, List.of(RASPBERRY_SLUSHY,NUTTY_FRUITY),
                TOASTED_MARSHMALLOW, List.of(RASPBERRY_SLUSHY,NUTTY_FRUITY, PISTACHIO_DELIGHT),
                TOASTED_ALMOND_FLAKES, List.of(NUTTY_FRUITY, COCO_COFFEE, PISTACHIO_DELIGHT),
                PEANUT_BUTTER, List.of(RASPBERRY_SLUSHY,NUTTY_FRUITY, COCO_COFFEE, PISTACHIO_DELIGHT),
                OREO_CRUMBLES, List.of(RASPBERRY_SLUSHY,NUTTY_FRUITY, COCO_COFFEE, PISTACHIO_DELIGHT),
                DRIED_APPLES, List.of(RASPBERRY_SLUSHY, NUTTY_FRUITY),
                DRIED_MANGO, List.of(RASPBERRY_SLUSHY,NUTTY_FRUITY),
                DRIED_APRICOT, List.of(RASPBERRY_SLUSHY,NUTTY_FRUITY),
                DRIED_BLUEBERRY, List.of(RASPBERRY_SLUSHY,NUTTY_FRUITY)
        );

        // HasMap of condiment prices
        Map<String, Integer> condimentPrices = Map.of(
                SPRINKLES, 50,
                TOASTED_MARSHMALLOW, 100,
                TOASTED_ALMOND_FLAKES, 150,
                PEANUT_BUTTER,50,
                OREO_CRUMBLES,60,
                DRIED_APPLES,25,
                DRIED_MANGO,30,
                DRIED_APRICOT,40,
                DRIED_BLUEBERRY,45
        );

        // HashMap of container prices
        Map<String ,Integer> containerPrices = Map.of(
                WAFER_CONE,20,
                WAFFLE_CONE,40,
                WAFFLE_BOWL,50,
                ICE_CREAM_SANDWICH_WAFERS,60
        );

        // Check base and condiment compatibility, and add value
        for (Condiment condiment: condiments ){
            String condimentName = condiment.getCondimentName();
            if(compatibleBases.get(condimentName).contains(base)){
                price += condimentPrices.get(condimentName) * condiment.getCount();
            }else {
                isValid=false;
                price = 0.0;
                message="Invalid Order";
                return new PriceResponse(isValid,price,message);
            }
        }

        // Add price of base
        price += basePrices.get(base) * scoops;

        // Add price of container
        price += containerPrices.get(container);

        return new PriceResponse(isValid,price,message);
    }
}
