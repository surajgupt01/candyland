import Slider from "@/components/Slider";

export default function Mural() {
  return (
    <div className="flex flex-col items-center p-4  gap-8">


      <div>
        <div
          style={{ fontFamily: "Thunder" }}
          className="text-4xl flex flex-row items-center gap-4"
        >
          <div className="h-0.5 w-8 bg-[#223DB9] tracking-widest"></div>
          <h1
            className="text-4xl tracking-wide"
            style={{ fontFamily: "Thunder" }}
          >
            {"MURAL & BRANDING"}
          </h1>
          <div className="h-0.5 w-8 bg-[#FF00FF]"></div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">

        <p className="text-sm lg:w-[55%] font-light text-center">
          Das XXL Mural ist Teil der Candyland Event- und Pop-up-Location am
          Kurfürstendamm – ist aber auch isoliert als High-Impact-Werbefläche
          buchbar.
        </p>

      
        <p className="text-sm lg:w-[55%] font-light text-center">
          Mit rund <Highlight>470 m² Fläche</Highlight> und ca.{" "}
          <Highlight>5,4 Mio. Kontakten pro Monat</Highlight> bietet die
          Muralfläche maximale Sichtbarkeit in einer der stärksten Lagen Berlins
          – zwischen urbanem Publikum, Tourismus, Luxury Retail und Kultur.
        </p>

        {/* Paragraph 3 */}
        <p className="text-sm lg:w-[55%] font-light text-center">
          Ob fotorealistisch, künstlerisch, Green Mural® oder 3D-Inszenierung:
          <br />
          Die Fläche eignet sich für markante Kampagnen, kulturelle Statements
          oder stadtrelevante Botschaften.
        </p>

        {/* Paragraph 4 */}
        <p className="text-sm lg:w-[55%] font-light text-center">
          In Kombination mit Container Branding, Main Hall Branding oder
          Event-Formaten vor Ort entsteht jedoch eine einzigartige Verbindung
          aus <Highlight>Reichweite und Aktivierung</Highlight> – außen starke
          Präsenz, innen echte Marken Experience.
        </p>
      </div>

      <Slider/>
    </div>
  );
}
const Highlight = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-pink-500 font-medium">{children}</span>;
};
