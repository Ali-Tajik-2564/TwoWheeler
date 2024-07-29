import React from 'react';

export default function Blog() {
  return (
    <div className="bg-article-page bg-cover  w-full h-auto flex item-center justify-center py-5 ">
      <div className="md:w-4/5 w-10/12 h-auto bg-white/70  px-4 py-7   flex flex-col item-center space-y-10">
        <img
          src="../Img/unsplash_5fNmWej4tAA.png"
          alt=""
          className="w-full md:h-[40%]  rounded-md"
        />
        <div className="w-full h-full flex flex-col item-center  space-y-5 md:p-4 p-2">
          <p className="md:text-3xl text-xl font-semibold text-bgPrimary">
            BLOG HEADRE
          </p>
          <p className="md:text-xl text-lg font-semibold text-bgPrimary">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Dis elit
            pharetra magna ultricies eu justo et vitae!
          </p>
          <p className="md:text-lg text-base font-medium text-bgPrimary ">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Tellus libero
            odio fringilla scelerisque ex fames. Imperdiet velit id maecenas
            convallis neque ligula enim. Varius nullam orci sit etiam; elementum
            quis. Consectetur mi ante proin sit, fusce metus. Non conubia urna
            aliquam porttitor aliquam vel bibendum elit condimentum. Mollis
            efficitur mattis augue; tellus commodo vitae. Dictum ipsum primis,
            curabitur in platea facilisis. Nostra hac molestie aliquet curae
            vestibulum in. Nullam nascetur elementum auctor primis; sem fusce.
            Integer leo nam praesent integer vitae.
            <br />
            Suscipit pellentesque varius lobortis curae vivamus nam dui?
            Senectus viverra cras eleifend himenaeos sodales. Ante curabitur nec
            ultricies nunc molestie laoreet. Elit fermentum natoque nisl feugiat
            nec et ultrices maecenas nascetur. Lacus ex consectetur; vulputate
            ante ullamcorper tristique.
            <br />
            Arcu fames ridiculus euismod; sagittis tortor nisi. Fusce convallis
            dolor rutrum purus platea id quisque maecenas. Aegestas habitant
            gravida consequat, conubia montes curabitur. Volutpat leo ad donec
            commodo et augue per. Augue efficitur etiam consequat suscipit elit
            suscipit quisque dui. Dignissim odio ut volutpat nec elementum orci.
            Eros scelerisque tempus enim ac hac viverra. Inceptos sociosqu
            elementum varius erat felis purus sem. At fusce nec pharetra
            habitasse nam dui luctus volutpat pulvinar. Taciti eros aliquam
            gravida pulvinar interdum.
          </p>
        </div>
      </div>
    </div>
  );
}
