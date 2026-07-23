package com.salAce.MindLog.entity;


import lombok.Data;
import lombok.NoArgsConstructor;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection  = "config_journal_app")
@Data
@NoArgsConstructor
public class ConfigJournalAppEntity {

    private String key; // this is the api key corresponding to the url below
    private String url; // this holds the api url
    private String service; // defines type of service... like for weather or elevenlabs and all

}
