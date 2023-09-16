import React, { useRef } from "react";
import useOnScreen from "./useOnScreen";

const OnScreenComponent = () => {
  const elementRef = useRef<HTMLHeadingElement | null>(null);
  const visible = useOnScreen("-200px", elementRef);
  return (
    <>
      <section>
        <h1>Heading</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          atque eaque labore eum accusamus accusantium esse harum odio neque,
          nisi, culpa reiciendis a velit autem quaerat asperiores quo dolorem,
          dolor corporis quas cupiditate reprehenderit. Sequi, iure distinctio.
          Iusto quod, veritatis facere id ratione officia reiciendis a
          perferendis asperiores consectetur, modi vitae ullam maiores
          blanditiis minima placeat aperiam facilis voluptatibus dolor commodi,
          dolores illo totam aut. Expedita, et excepturi sed accusantium nulla
          rerum voluptates! Unde, itaque ratione. Quia blanditiis tenetur illum
          provident reiciendis, et explicabo at eum saepe? Accusantium
          consectetur magnam ipsa, omnis adipisci rem temporibus corporis
          eligendi ea voluptas harum optio fugit possimus facere at voluptatem
          dolorem natus. Assumenda voluptate dignissimos, eos distinctio ducimus
          sapiente et, quidem blanditiis magnam repellendus deleniti error
          adipisci? Cum unde animi officiis perferendis, dolor quasi ex quae,
          quo quidem corrupti enim sapiente cumque laudantium nulla ea
          molestiae? Deserunt vero minus voluptas inventore ea, assumenda sequi
          autem officiis beatae delectus ad impedit distinctio harum iusto
          nesciunt maiores, quo nihil est iure? Et odio deleniti in, harum ipsum
          excepturi? Earum, molestias cupiditate commodi sit soluta veniam
          nostrum optio deserunt tempore corporis voluptatem minus fuga debitis
          esse quasi culpa dicta sunt praesentium, similique consequatur quam.
          Blanditiis, non commodi. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Magnam distinctio itaque nostrum excepturi sunt,
          aliquam quod exercitationem maxime, ea corrupti molestiae soluta ipsa
          ad nesciunt ullam eum non deleniti nisi vitae voluptatem, facilis
          quasi. Impedit nulla similique, explicabo officiis corporis sequi modi
          ducimus dicta deleniti autem excepturi, quis, adipisci eligendi libero
          totam? Labore perspiciatis cum corporis vel velit consequuntur ut
          repellat. Velit maxime, aspernatur rerum dolorum explicabo, quos ipsa,
          et corporis mollitia officia labore aliquam excepturi reiciendis
          veritatis asperiores consequatur perspiciatis pariatur aut distinctio
          adipisci amet consectetur blanditiis! Odio aliquam nostrum ad
          assumenda incidunt eligendi perferendis consequatur similique nesciunt
          facere? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
          doloremque vero aliquam reiciendis consequatur omnis dicta esse quo
          eius nostrum repellat, eos veniam placeat, tenetur quisquam. Debitis
          ratione error velit nam ad! Illo inventore eius iste laboriosam
          recusandae obcaecati. Possimus, dolorum vitae earum itaque iusto ipsa
          eligendi optio quam labore pariatur sint quibusdam, cupiditate debitis
          tenetur fugiat quia aspernatur aut, dolor ratione. Saepe fugiat earum
          facere aut excepturi rerum pariatur nihil distinctio aspernatur!
          Commodi, deserunt necessitatibus labore totam reprehenderit amet
          itaque fugiat. Molestias debitis aut, facilis doloribus ut iste
          voluptate quos necessitatibus repellendus suscipit blanditiis odio
          soluta enim, ullam exercitationem.
        </p>
      </section>
      <section>
        <h1 ref={elementRef}>Heading 2 {visible && <span>Visible</span>}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
          officiis fugit expedita quaerat sapiente fugiat. Magni dolorem
          veritatis, expedita quae animi nam excepturi fuga fugit earum sequi,
          tempore ad ipsam ratione cum placeat. Beatae velit at eligendi tenetur
          magnam amet in nemo facilis ut earum architecto blanditiis
          consequuntur debitis quod mollitia fuga, provident officia.
          Consequatur, quaerat odio! Ipsa sapiente dolor natus quos cum quis,
          labore dicta beatae nobis! Nulla ullam harum voluptatum soluta dolore
          repellat eaque enim omnis ea assumenda ratione est alias, facere odio
          magnam. Eius harum modi exercitationem non iste voluptatem, dolore
          maiores odio totam, ea magnam, iusto adipisci reprehenderit molestiae
          dicta perspiciatis atque accusantium. Ullam modi sapiente fuga,
          distinctio, cum ea natus atque reprehenderit maiores aliquam adipisci
          aut, quia deleniti eaque placeat harum hic sed vero neque. Laudantium
          provident minima quaerat adipisci beatae mollitia repellendus omnis
          totam nostrum placeat in quae earum, quis quibusdam quasi magni
          ducimus perspiciatis illo minus similique optio magnam explicabo.
          Animi culpa consequuntur aliquid nostrum ullam et, officiis maiores
          nemo voluptas quis sapiente sunt ratione id cum eius in reprehenderit
          impedit delectus, corrupti unde accusamus non earum, aspernatur
          inventore! Enim repudiandae dicta illum labore magnam eligendi
          repellat architecto ea! Magnam cum aliquid beatae, vel autem nam
          mollitia quia quisquam unde nesciunt veniam excepturi obcaecati
          consequatur quae hic similique. Quae ipsum repellat commodi, deserunt
          illo modi officia blanditiis error temporibus amet accusamus aperiam
          est natus minus fuga. Esse commodi voluptate tempora delectus libero
          quidem nemo ratione nesciunt, adipisci animi alias quis enim ipsum
          architecto vel, distinctio blanditiis recusandae exercitationem!
          Dolore quidem dignissimos sequi ea consectetur quas ipsum fuga.
          Cupiditate quis ad, omnis iste deleniti nam ab rem, eum dolorem error
          nostrum eos, accusantium autem eius libero. Nostrum maxime sint quos
          consectetur reiciendis ipsum sit laudantium explicabo sapiente.
          Tempore libero iusto vel repellat! Tempora, atque debitis asperiores
          ut itaque, porro corporis dolorem exercitationem adipisci placeat
          officia quidem consequuntur similique consectetur. Consectetur non
          cumque atque temporibus unde. Quas, corrupti at. Accusantium
          temporibus reprehenderit provident eveniet molestias corporis odio
          harum perferendis pariatur soluta optio, quod distinctio mollitia
          libero voluptatibus, blanditiis quidem! Vero odit labore nisi sed ex
          ipsum aperiam et, voluptate reiciendis! Molestias non totam
          praesentium sed pariatur modi corrupti voluptas cumque natus fugiat
          reiciendis, ipsum nemo at tempora optio nisi officiis id quaerat.
          Minus ullam consectetur libero, id eveniet veritatis alias nemo
          provident a repudiandae hic reprehenderit minima aperiam iure eius, ex
          cumque, ab voluptatum ipsum.
        </p>
      </section>
    </>
  );
};

export default OnScreenComponent;
