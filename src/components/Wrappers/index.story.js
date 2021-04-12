import React from "react"

import { Elements, Element } from "components"
import { WrapperSection } from "./WrapperSection"

export default { title: "Components/Wrappers", component: Example }

export const Example = () => (
  <Elements>
    <Element title="section" variant="full-width" info="width">
      <WrapperSection>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor necessitatibus libero
        asperiores? Rem accusamus vel magni quaerat consectetur. Corporis nemo facilis ullam veniam
        recusandae dolorum laboriosam aspernatur enim iusto id necessitatibus debitis eveniet
        voluptatibus facere provident voluptate eum ducimus, fuga quas illo incidunt quod tempore!
        Delectus aliquam laboriosam unde voluptates velit veniam illo quibusdam deserunt odio
        aperiam. Saepe architecto perspiciatis repellendus est ex qui nihil ab similique ducimus
        harum nesciunt ullam eaque iure dignissimos, inventore cumque. Odio, soluta quisquam nostrum
        exercitationem doloribus, beatae explicabo impedit distinctio excepturi et laborum
        consequuntur quibusdam porro animi neque quasi molestiae. At expedita nemo corrupti.
      </WrapperSection>
    </Element>
    <Element title="section" variant="full-width" info="width">
      <WrapperSection variant="background-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor necessitatibus libero
        asperiores? Rem accusamus vel magni quaerat consectetur. Corporis nemo facilis ullam veniam
        recusandae dolorum laboriosam aspernatur enim iusto id necessitatibus debitis eveniet
        voluptatibus facere provident voluptate eum ducimus, fuga quas illo incidunt quod tempore!
        Delectus aliquam laboriosam unde voluptates velit veniam illo quibusdam deserunt odio
        aperiam. Saepe architecto perspiciatis repellendus est ex qui nihil ab similique ducimus
        harum nesciunt ullam eaque iure dignissimos, inventore cumque. Odio, soluta quisquam nostrum
        exercitationem doloribus, beatae explicabo impedit distinctio excepturi et laborum
        consequuntur quibusdam porro animi neque quasi molestiae. At expedita nemo corrupti.
      </WrapperSection>
    </Element>
  </Elements>
)
