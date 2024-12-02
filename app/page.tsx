import AppCalculator from "./components/Calculator";


export const metadata = {
 title: 'App Calculadora',
 description: 'Esta es una app de calculadora y utiliza el patron de diseño Strategy',
};

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] ">
      <AppCalculator/>
    </div>
  );
}
