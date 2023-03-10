package com.javatpoint.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
//import org.apache.catalina.core.ApplicationContext;
//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.javatpoint.Pojos.Person;
import com.javatpoint.Pojos.Product;
//import com.javatpoint.Repositories.CrudDataRepository;
import com.javatpoint.Services.DataService;
import com.javatpoint.VO.PersonVO;

@RestController
public class MainController {
	
	private static Map<String, Product> productMap = new HashMap<>();
//	private DataService dataService = new DataService();
//	private PersonRepository personRepo;
//	private ProductRepository productRepo;
	
	@Autowired
	private DataService dataService;
	
	static {
		Product product1 = new Product();
		product1.setProduct_ID("1");
		product1.setProduct_Name("Fibi-NTU");
		
		Product product2 = new Product();
		product2.setProduct_ID("2");
		product2.setProduct_Name("Fibi-KU");
		
		Product product3 = new Product();
		product3.setProduct_ID("3");
		product3.setProduct_Name("Fibi-SMU");
		
		productMap.put(product1.getProduct_ID(), product1);
		productMap.put(product2.getProduct_ID(), product2);
		productMap.put(product3.getProduct_ID(), product3);
	}
	
	@GetMapping(value = "/")
	public String defaultMethod() {
		String message = "this is the default method";
		return message;
    }

	@GetMapping(value = "/products")
	public ResponseEntity<Object> getProducts() {
		return dataService.getAllProducts(productMap);
	}
	
	@PostMapping(value = "/addPersonDetail")
	public void addPersonDetail(@RequestBody PersonVO personVo) {
		dataService.addPersonDetail(personVo);
	}
	
	@GetMapping(value = "/getPersonDetail")
	public Person getPersonDetail() {
		return dataService.getPersonDetail();
	}
	
}
