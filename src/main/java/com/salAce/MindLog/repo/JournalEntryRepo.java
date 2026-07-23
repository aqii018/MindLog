package com.salAce.MindLog.repo;
import com.salAce.MindLog.entity.JournalEntry;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface JournalEntryRepo extends MongoRepository<JournalEntry , ObjectId>{



}