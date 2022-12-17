<template>
  <div class="header">
          <img class="gif" src="../assets/hammond_dance.gif">
          <b class="text">Автобиография</b>
          <img class="gif" src="../assets/hammond_dance.gif">
      </div>
      <div class="background">
          <div class="text-area">
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque id nibh tortor id aliquet lectus proin nibh. Mollis nunc sed id semper risus in hendrerit gravida. Sem viverra aliquet
                  eget sit amet tellus cras adipiscing. Viverra justo nec ultrices dui. Feugiat nisl pretium fusce id. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl. Vitae sapien pellentesque habitant morbi tristique senectus et.
                  Parturient montes nascetur ridiculus mus mauris. Rutrum tellus pellentesque eu tincidunt tortor aliquam.
              </p>
              <p>
                  Pellentesque habitant morbi tristique senectus et. Lobortis feugiat vivamus at augue eget arcu dictum. Pretium quam vulputate dignissim suspendisse in est ante. Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt. Faucibus scelerisque
                  eleifend donec pretium vulputate sapien nec sagittis. Mauris cursus mattis molestie a iaculis at. Faucibus in ornare quam viverra orci sagittis eu volutpat odio. Habitasse platea dictumst vestibulum rhoncus est pellentesque. Ipsum
                  dolor sit amet consectetur adipiscing elit. Massa sed elementum tempus egestas sed sed risus pretium. Pellentesque habitant morbi tristique senectus. Aliquam sem et tortor consequat id porta nibh venenatis cras. Ultricies integer quis
                  auctor elit. Vulputate eu scelerisque felis imperdiet proin fermentum leo. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. In eu mi bibendum neque egestas congue quisque egestas diam. Dui sapien eget mi proin. Velit
                  dignissim sodales ut eu sem integer vitae justo. Adipiscing elit duis tristique sollicitudin.
              </p>
              <p>
                  Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Etiam tempor orci eu lobortis elementum nibh tellus. Arcu dui vivamus arcu felis. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Curabitur vitae nunc sed velit dignissim
                  sodales. Praesent tristique magna sit amet purus gravida quis blandit turpis. Interdum posuere lorem ipsum dolor sit amet. Nisi porta lorem mollis aliquam ut porttitor leo. Quam pellentesque nec nam aliquam sem et tortor. Id leo in
                  vitae turpis massa sed. A condimentum vitae sapien pellentesque habitant morbi tristique senectus. Urna neque viverra justo nec. Tristique nulla aliquet enim tortor at auctor urna. In ante metus dictum at. Iaculis urna id volutpat
                  lacus. Diam volutpat commodo sed egestas egestas fringilla.
              </p>
              <p>
                  Sed risus ultricies tristique nulla. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Vel fringilla est ullamcorper eget nulla. Senectus et netus et malesuada fames. Neque egestas congue quisque egestas diam. Duis tristique sollicitudin
                  nibh sit amet commodo nulla facilisi. Massa ultricies mi quis hendrerit dolor magna eget. Hendrerit gravida rutrum quisque non tellus orci ac auctor. Non consectetur a erat nam at lectus urna duis convallis. Tristique nulla aliquet
                  enim tortor at. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. In tellus integer feugiat scelerisque varius morbi. Vel risus commodo viverra maecenas accumsan lacus. Urna et pharetra pharetra massa massa ultricies
                  mi quis. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Lorem sed risus ultricies tristique. Sit amet consectetur adipiscing elit ut aliquam purus sit amet. Sed lectus vestibulum mattis ullamcorper
                  velit. Faucibus in ornare quam viverra orci sagittis eu. Est pellentesque elit ullamcorper dignissim cras tincidunt.
              </p>
              <p>
                  Ac tortor vitae purus faucibus ornare suspendisse sed nisi. Amet venenatis urna cursus eget nunc. Quisque id diam vel quam elementum pulvinar etiam non quam. Risus in hendrerit gravida rutrum quisque. Etiam dignissim diam quis enim lobortis scelerisque
                  fermentum. Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Ut tellus elementum sagittis vitae et leo duis ut. Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. In nibh mauris cursus mattis
                  molestie a iaculis at. Massa enim nec dui nunc mattis enim ut tellus elementum. Scelerisque fermentum dui faucibus in ornare quam viverra orci. Suspendisse ultrices gravida dictum fusce ut placerat. Pretium quam vulputate dignissim
                  suspendisse in est ante in. Urna neque viverra justo nec ultrices dui. Tristique senectus et netus et malesuada fames. Orci ac auctor augue mauris augue neque. Iaculis urna id volutpat lacus. Dui faucibus in ornare quam viverra orci
                  sagittis. Sit amet luctus venenatis lectus magna fringilla. Lobortis mattis aliquam faucibus purus in massa tempor nec.
              </p>
          </div>
  </div>
</template>

<script>
export default {
name: 'AboutView',
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 50px;
}

.gif {
  width: 60px;
  height: 60px;
  border-radius: 10px;
}

.text {
  font-size: 1.5em;
  color: aliceblue;
  margin-left: 20px;
  margin-right: 20px;
}

.background {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: #300061;
  border-radius: 10px;
  border: 1px solid #fff;
  padding: 10px;
}

p {
  text-align: center;
  font-size: 1.2em;
  color: aliceblue;
  margin-bottom: 30px;
  padding-left: 20px;
  padding-right: 20px;
}

.text-area {
  display: inline;
  justify-content: center;
  align-items: center;
}

</style>