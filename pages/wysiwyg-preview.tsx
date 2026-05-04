import Layout from "../src/components/Layout";
import RichTextArticle from "../components/RichTextArticle";

const previewContent = `
  <p>
    In an era of rapid medical advancements, the human touch of caregiving remains
    irreplaceable. Caregivers play a crucial role in ensuring patients feel safe,
    understood, and cared for beyond just their clinical needs. Their dedication
    helps foster dignity and trust, making caregiving an essential pillar of
    healthcare systems worldwide.
  </p>

  <p>
    Faucibus commodo massa rhoncus, volutpat. <strong>Dignissim sed eget risus enim.</strong>
    Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est.
    Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo
    massa rhoncus, volutpat. Dignissim sed eget risus enim. <a href="#team">Mattis mauris semper</a>
    sed amet vitae sed turpis id.
  </p>

  <ul>
    <li>Quis elit egestas venenatis mattis dignissim.</li>
    <li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
    <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
  </ul>

  <p>
    Quis semper vulputate aliquam venenatis egestas sagittis quisque orci. Donec commodo sit
    viverra aliquam porttitor ultrices gravida eu. Tincidunt leo, elementum mattis elementum
    ut nisl, justo, amet, mattis. Nunc purus, diam commodo tincidunt turpis. Amet, duis sed
    elit interdum dignissim.
  </p>

  <ol>
    <li>Integer varius imperdiet sed interdum felis cras in nec nunc.</li>
    <li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
    <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
    <li>Integer varius imperdiet sed interdum felis cras in nec nunc.</li>
  </ol>

  <h2>Beyond Treatment: The Human Connection in Care</h2>

  <p>
    Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu
    ipsum urna nibh. Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh.
    Maecenas pellentesque sed tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus
    mi. Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis diam.
  </p>

  <blockquote>
    <p>
      "Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur
      neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi."
    </p>
  </blockquote>

  <p>
    Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
    semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus
    viverra tellus varius sit neque erat velit.
  </p>

  <figure class="wp-block-image aligncenter size-full">
    <img src="/assets/images/wysiwig-img.png" alt="Hands resting gently together" />
    <figcaption>Sagittis scelerisque nulla cursus in enim consectetur quam.</figcaption>
  </figure>

  <h2>Building Trust and Dignity Through Compassion</h2>

  <p>
    Purus morbi dignissim senectus mattis. Amet, massa quam varius orci dapibus volutpat cras.
    In amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus
    non molestie. Gravida quis fringilla amet eget dui tempor dignissim. Facilisis auctor
    venenatis varius nunc, congue erat ac. Cras fermentum convallis quam.
  </p>

  <p>
    Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
    semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus
    viverra tellus varius sit neque erat velit.
  </p>
`;

export default function WysiwygPreviewPage() {
  return (
    <Layout title="WYSIWYG Preview">
      <div className="la-wysiwyg-preview-frame">
        <RichTextArticle
          title="Website Privacy Policy Statement"
          date="2026-04-01"
          content={previewContent}
        />
      </div>
    </Layout>
  );
}
