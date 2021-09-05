# sprout-superset-module
Create Superset charts in the Sprout Platform

Read more about the Sprout Project -  
[https://github.com/savantly-net/sprout-platform](https://github.com/savantly-net/sprout-platform)


## Quick start

### Example
[Example server](./example) using the module.  
Run the docker compose to set the example environment.  

```
docker compose -f example/docker-compose.yml up
```

Access the front-end at [http://localhost:3000](http://localhost:3000) 
with the default user/pass `admin/changeme!`

Postgres Adminer is exposed at `localhost:8081`

To remove the containers -  

```
docker compose -f example/docker-compose.yml rm
```

To build the example image locally - 
```
./gradlew :example:bootBuildImage
```

### Module
The module for the Sprout Platform.   
The module is packaged as a jar, and contains backend and frontend code.  

#### Development 
In one terminal start the Java dev continuous build.  

```
./gradlew :module:compileJava --continuous
```

In another terminal, start the required resourses [DB, WebApp]

```
docker compose -f module/docker-compose.yml up
```

Finally in another terminal, start the dev app -  

```
./gradlew :module:bootRun
```

To continuously build the plugin/front-end code, open another terminal - 
This allows seamless development of the front-end code. Refresh the browser to see updates.  

```
cd module
yarn watch
```

Sprout UI should be running at [localhost:3000](http://localhost:3000)  
Sprout API should be running at [localhost:8080](http://localhost:8080)  
Adminer should be running at [localhost:8081](http://localhost:8081)  

