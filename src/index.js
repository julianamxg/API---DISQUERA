const app=require('./app');

app.listen(process.env.PORT || 3002, function(){
  console.log("Express escucha el servidor en el puerto %d in %s mode", this.address().port, app.settings.env);
});