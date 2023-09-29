package edu.wgu.d387_sample_code.convertor;

@Service
public class MessageService {

    public String getMessage(String key) {
        // Implement your message retrieval logic here
        // This method should return the message corresponding to the given key
        // You can use any method, database, or service to fetch the message
        // For example:
        if ("welcome.message.english".equals(key)) {
            return "Welcome to our website!";
        } else if ("welcome.message.french".equals(key)) {
            return "Bienvenue sur notre site Web !";
        } else {
            return "Message not found";
        }
    }
}
