import Header from "../components/Header"
import ProcessTab from"../components/ProcessTab";

function Process() {
  return (
    <section id="process">
      <div className="max-w-full h-full mx-auto md:px-20  px-10 md:py-10 py-5">
        <div className=" w-fit mr-auto">
            <Header title1="Our" title2="Process" />
        </div>
        {/* Process Container */}
       <div className="md:flex  md:mt-65 ">
        <ProcessTab/>
       </div>
      </div>
    </section>
  );
}
export default Process;
