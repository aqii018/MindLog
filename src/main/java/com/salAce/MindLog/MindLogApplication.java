	package com.salAce.MindLog;

	import com.salAce.MindLog.filter.JwtFilter;
    import org.springframework.boot.SpringApplication;
	import org.springframework.boot.autoconfigure.SpringBootApplication;
	import org.springframework.context.ConfigurableApplicationContext;
	import org.springframework.context.annotation.Bean;
    import org.springframework.data.mongodb.MongoDatabaseFactory;
	import org.springframework.data.mongodb.MongoTransactionManager;
	import org.springframework.scheduling.annotation.EnableScheduling;
	import org.springframework.security.authentication.AuthenticationManager;
	import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
	import org.springframework.transaction.annotation.EnableTransactionManagement;
	import org.springframework.web.client.RestTemplate;

    @SpringBootApplication
	@EnableTransactionManagement
	@EnableScheduling
	public class MindLogApplication {

		public static void main(String[] args) {


			ConfigurableApplicationContext context = SpringApplication.run(MindLogApplication.class, args);
//			ConfigurableEnvironment environment = context.getEnvironment();
//			System.out.println((environment.getActiveProfiles()[0])) ;


		}

		@Bean
		public MongoTransactionManager trans(MongoDatabaseFactory dbFactory){

			return new MongoTransactionManager(dbFactory) ;
		}
		@Bean
		RestTemplate restTemplate (){
			return new RestTemplate();
		}

		@Bean
		public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception{
			return configuration.getAuthenticationManager();
		}

		@Bean
		public JwtFilter jwtFilter() {
			return new JwtFilter();
		}




	}

