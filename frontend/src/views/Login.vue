<template>
    <div>
         <div>
        <div class="container no-mostrar-mobile">
          <br/>
          <div class="row">
          <div class="col-sm">
            </div>
            <div class="col-sm">
              <div class="card">
                <div class="card-header text-center">
                  Iniciar Sesion
                </div>
                <div class="card-body">
                <img src="../imagenes/lava-manos.svg" class="card-img" alt="..." height="300" width="300"/>
                  <p class="card-text text-center">¡Recuerda siempre lavarte las manos!</p>
                  <button type="button" class="btn btn-outline-primary btn-block">
                    <img src="../imagenes/icons8-facebook.svg" alt="" width="30" height="30"/>
                    Acceder con facebook
                    </button>
                </div>
              </div>
            </div>

            <div class="col-sm">
            </div>
          </div>
        </div>


        <div class="mostrar">
          <h5 class="text-center">Iniciar sesión</h5>
          <img src="../imagenes/personas.svg" class="card-img" alt="..." height="300" width="300" />
          <p class="text-center">
            ¡Recuerda siempre mantener tu distancia con las demas personas!
      </p>
          <button type="button" class="btn btn-outline-primary btn-block">
          <img src="../imagenes/icons8-facebook.svg" alt="..." width="30" height="30" class="mr-1"/>
          Acceder con facebook
        </button>
        </div>

      </div>

    </div>
</template>
<script>
export default {
  name:"Login"
}
</script>