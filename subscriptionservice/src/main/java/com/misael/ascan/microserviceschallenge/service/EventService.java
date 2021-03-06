package com.misael.ascan.microserviceschallenge.service;

import com.misael.ascan.microserviceschallenge.model.Event;
import com.misael.ascan.microserviceschallenge.producer.EventProducer;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EventService {

    private final EventProducer producer;

    public boolean createEvent(Event event) {
        return producer.sendMessage(event);
    }
}
