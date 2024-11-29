import React from 'react';
import SignInButton from '../../Pages/SignInForm';

const HeroSection5 = () => {
    return (
        <>
            <div className="flex justify-center w-full">
                <div className="w-[80%]">
                    <p className="text-5xl font-bold mb-6">Formats</p>
                    <p className="text-lg ">In-person: Live in Prague, Czech Republic</p>
                    <p className="text-lg ">@Prague: For delegates in Prague but presenting virtually</p>
                    <p className="text-lg ">Zoom: Virtual presentations coordinated by AMPS</p>
                    <p className="text-lg ">Pre-recorded: Pre-recorded presentations or films will be available permanently on the AMPS Academic YouTube channel</p>
                    <p className="text-lg ">Written papers: In all cases, delegates can present full written papers for inclusion in associated conference publications</p>
                </div>
            </div>
            <div className="flex text-white pl-[10%] mt-7 mb-16">
                <p className="bg-black mr-[1px] p-2">In-person: (15-20 mins)</p>
                <p className="bg-black mr-[1px] p-2">@Prague (15-20 mins)</p>
                <p className="bg-black mr-[1px] p-2">Zoom: (15-20 mins)</p>
                <p className="bg-black mr-[1px] p-2">Pre-recorded video: (15-20 mins)</p>
                <p className="bg-black mr-[1px] p-2">Written papers: (3000 words)</p>
            </div>
            <div className="flex justify-center w-full mb-28">
                <div className="w-[80%]">
                    <p className="text-5xl font-bold mb-6 ">Publications</p>
                    <span>The publishers that AMPS works with include Routledge Taylor & Francis, UCL Press, Cambridge Scholars Publishing, Vernon Press, <p>Libri Publishing and Intellect Books.</p></span>
                    <p className="mt-5">Conference outputs include the AMPS Proceedings Series, ISSN 2398-9467; Special Issue Publications of the academic journal Architecture_MPS ISSN 2020-9006;</p>
                    <p> Books from this event will be developed by Routledge Taylor & Francis, with short films available on the AMPS Academic YouTube Channel.</p>

                    <p className="mt-7">
                        Written papers are optional. If submitted they should be 3,000 word length. Formatting instructions to follow after the conference.
                        All papers are double-blind peer-reviewed for the AMPS Conference Proceedings Series. Subject to review, selected authors will be invited to
                        develop longer versions as articles in the academic journal Architecture_MPS or in specially produced conference books.
                    </p>

                </div>
            </div>
            <div className="w-full flex justify-center">
                <div className="w-[80%]">
                    <p className="text-5xl mb-10 font-bold">Submissions & Registration:</p>
                    <p className="m-5 ml-0">Registration Delegate Fee: $420 USD | Audience Fee: $210 USD</p>
                    <p className="m-5 ml-0">Click the button below to submit your abstract. To resubmit or revise an abstract click here.</p>

                    <div className="text-black mb-28 flex">

                          {/* Import and use AbstractButton component */}
                        <SignInButton/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection5;
