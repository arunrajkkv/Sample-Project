package com.javatpoint.Services;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.javatpoint.DAO.PersonDAO;
import com.javatpoint.Pojos.Person;
import com.javatpoint.Pojos.Product;
import com.javatpoint.VO.PersonVO;

@Service
public class DataService {
	
	@Autowired
	private PersonDAO personDao;
	
	public ResponseEntity<Object> getAllProducts(Map<String, Product> productMap) {
		return new ResponseEntity<>(productMap.values(), HttpStatus.OK);
	}
	
	public void addPersonDetail(PersonVO personVo) {
		personDao.savePersonDetails(personVo.getFirstName(), personVo.getLastName());
	}
	
	public Person getPersonDetail() {
		return personDao.getPersonDetail();
	}
	
	public String updateItem() {
		return "Item Updated Successfully";
	}
	
	public String deleteItem() {
		return "Item Deleted Successfully";
	}

}
