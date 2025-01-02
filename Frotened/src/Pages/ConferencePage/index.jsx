import React, { useState, useRef } from 'react';
import HeaderUpper from '../../Components/HeaderUpper';
import LowerHeader from '../../Components/LowerHeader';
import Footer from '../../Components/Footer';
import { FaPlus } from 'react-icons/fa';

const Track = ({ trackName, trackTitle, trackContent, onToggle, isRotated, iconRef }) => (
  <li>
    {trackTitle}
    <button
      onClick={() => onToggle(trackName)}
      ref={iconRef}
      className={`ml-2 text-black text-sm relative transform transition-transform duration-300 ${isRotated ? 'md:rotate-45' : ''}`}
    >
      <FaPlus />
    </button>
  </li>
);

const ConferencePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [isRotated, setIsRotated] = useState({});
  const [selectedTrack, setSelectedTrack] = useState(null);


  const iconRefs = {
    greenChemistry: useRef(null),
    medicinalChemistry: useRef(null),
    computationalChemistry: useRef(null),
    modernSpectroscopicTechniques: useRef(null),
    nanomaterials: useRef(null),
    biochemistry: useRef(null),
    pharmaceuticalChemistry: useRef(null),
    synthesisandCharacterizationofNanomaterials: useRef(null),
    NanostructuredMaterials: useRef(null),
    Solarcells: useRef(null),
    ChemicalSensors: useRef(null),
    AppliedMathematics: useRef(null),
    MathematicalModeling: useRef(null),
    FuzzyMathematics: useRef(null),
    DifferentialEquations: useRef(null),
    Topology: useRef(null),
    Algebra: useRef(null),
    ProbabilityandStatistics: useRef(null),
    AppliedStatisticsInference: useRef(null),
    SamplingTechniques: useRef(null),
    NumericalTechniques: useRef(null),
    OperationResearch: useRef(null),
    GraphTheory: useRef(null),
    OptimizationTechniquesetc: useRef(null),
    FluidMechanics: useRef(null),
    HRM: useRef(null),
    Marketing: useRef(null),
    BrandManagement: useRef(null),
    FinancialEconomics: useRef(null),
    ConsumerBehavior: useRef(null),
    Ecommercemanagement: useRef(null),
    FinancialManagement:useRef(null),
    Economics:useRef(null),
    HumanResourceManagement:useRef(null),

  };

  const physicalScience = {
    synthesisandCharacterizationofNanomaterials: {
      title: "Synthesis and Characterization of Nanomaterials",
      content: `The two basic approaches for the synthesis of nanomaterials are bottom-up and top-down methods. 
      The top-down techniques include nanolithography, mechanical milling or ball milling, laser ablation, sputtering, 
      electron explosion arc discharge, and thermal decomposition. On the other hand, the bottom-up techniques include CVD method, 
      Sol-Gel method, spinning, pyrolysis, solvothermal and hydrothermal methods, soft and hard templating methods, reverse micelle method,
       and biological synthesis. There are several methods for the characterization of nanomaterials. The choice of method depends on the property
        to be analysed. Some of the most commonly used characterization methods are: SEM/TEM for particle shape, size and morphology;
         BET for accessible surface area; XRD for extent of crystallization of the sample; HRTEM for crystallographic structure of a sample at an atomic scale; 
         UV-VIS spectra for UV absorption of the amorphous gels and crystalline ceramic samples heated at different temperatures; FT-IR vibrational stretch
          frequency of metal-oxygen bonds; TG-DTA for weight loss and thermal effect during the conversion of precursors to final method oxides
           in the heat-treatment process; SLS for particle size distribution; EELS for loss of energy, change in momentum, and ionization potential
            of an atom; EDS/EDX for Chemical characterization, 
      investigation of a sample through interactions between light and matter and analysing X-rays in particular cases.`
    },
    NanostructuredMaterials: {
      title: "Nanostructured Materials",
      content: `Nanostructured Materials (NsM), also known as nanophase materials, or nanocrystalline materials or supramolecular solids, can be divided 
      into three broad categories. The first category comprises materials and devices consisting of nanometre-sized isolated, substrate-supported or embedded 
      particles, thin wires or thin films. Most frequently, techniques like CVD, PVD, inert gas condensation, various aerosol techniques, precipitation from 
      the vapour, from supersaturated liquids or solids (both crystalline and amorphous) are used to generate this type of nanostructured materials. Catalysts
       and semiconductor devices, utilizing single or multilayer quantum well structures, are made-up this type of nanostructured materials. The second category
        comprises materials and devices in which the nanometre-sized structure is limited to a thin surface region of a bulk material. PVD, CVD, ion implantation
         and laser beam treatments are the most widely applied procedures to modify the chemical composition and/or atomic structure of solid surfaces on a nanometre scale. Surfaces with enhanced corrosion resistance, hardness, wear resistance or protective coatings (e.g. by diamond) use such nanostructured materials. An important subgroup of this category are materials, the surface region of which are structured laterally by writing a nanometre-sized structural pattern on the free surface. For example, patterns in the form of an array of nanometre-sized islands (e.g. quantum dots) connected by thin (nanometre scale) wires. Patterns of this type may be synthesized by lithography, by means of local probes (e.g. the tip of a tunnelling microscope, near-field methods, focussed electron or ion beams) and/or surface precipitation processes. Processes and devices of this sort play a key role in the production of the state of art electronic devices such as ultrafast microprocessors, terrabit memories, single electron transistors, quantum computers, etc. The third category is of bulk solids with nanometre-scale structures. There are bulk solids in which the chemical composition, the atomic arrangement and/or the size of the building blocks (e.g. crystallites or atomic/molecular groups) forming the solid vary on a length scale of a few nanometres throughout the bulk. Two classes of such solids may be distinguished. In the first class, the atomic structure and/or the chemical composition varies in space continuously throughout the solid on an atomic scale. Glasses, gels, supersaturated solid solutions or implanted materials are examples of this type. In many cases these types of solids are produced by quenching a high-temperature equilibrium structure, e.g. a melt or a solid solution to low temperatures at which the structure is far away from equilibrium. The second class of materials are assembled of nanometre-sized building blocks mostly crystallites. These building blocks may differ in their atomic structure, their crystallographic orientation, and their chemical composition. If the building blocks are crystallites, incoherent or coherent interfaces
       may be formed between them, depending on the atomic structure, the crystallographic orientation, and the chemical composition of adjacent crystallites.
        Thus, such materials are microstructurally heterogeneous consisting of the building blocks (e.g. crystallites) and the regions between adjacent building
         blocks (e.g. grain boundaries). It is this inherently heterogeneous structure on a nanometre scale that is crucial for many of their properties and
          distinguishes them from glasses, gels, etc. that are microstructurally homogeneous.`
    },
    Solarcells: {
      title: "Solar cells",
      content: `Silicon Solar cells provide a combination of high efficiency, low cost, and long lifetime. They are being used in approximately 95% of the PV modules sold and operated worldwide. Cadmium telluride (CdTe) and copper indium gallium diselenide (CIGS) based thin-film solar cells are made by depositing one or more thin layers on a supporting material such as glass, plastic, or metal using low-cost manufacturing processes but their efficiencies are not as high as of silicon. Moreover, both CdTe and CIGS require more protection than silicon for long-lasting outdoor operation. are the other semiconducting
Perovskite solar cells are a type of thin-film cells that are printed, coated, or vacuum-deposited onto a suitable substrate. In June 2024, perovskite-silicon tandem solar cell has been reported to have an impressive efficiency of 34.6% surpassing the Shockley-Queisser theoretical efficiency limit of 33.7% for single junction solar cells. Researchers are working on making perovskite cells more durable and developing large-scale, low-cost manufacturing techniques so as to make them commercially viable.
Organic Photovoltaic (OPV) cells are composed of carbon-rich organic compounds and can be tailored to enhance a specific function, such as bandgap, transparency, or colour. They can also be applied to a variety of supporting materials, such as flexible plastic, so as to serve a wide variety of uses. Currently, OPV cells are almost half as efficient as silicon cells and have shorter operating lifetimes.
Multijunction solar cells are essentially layers of different semiconductor materials. Each layer, having different bandgap, absorbs a different part of the solar spectrum thereby achieving record efficiency. Quantum dots, with customised size and bandgap, are built into multijunction solar cells enabling them to collect light that is difficult to capture and to be paired with other semiconductors, like perovskites, to optimize the performance of the solar cell.`
    },
    ChemicalSensors: {
      title: "Chemical Sensors",
      content: `A chemical sensor is a device that transforms chemical information, like presence/absence, identity, concentration, etc. of a specific sample-component to total composition analysis, into an analytically useful signal. This chemical information may originate from a chemical reaction of the analyte or from a physical property of the system being investigated. Chemical sensors contain two basic functional units: a receptor part and a transducer part. In the receptor part of a sensor, the chemical information is transformed into a form of energy which may be measured by the transducer. The transducer part is a device capable of transforming the energy carrying the chemical information about the sample into a useful analytical signal. The transducer as such does not show selectivity. The receptor part of chemical sensors may be based upon various principles: physical, like change in conductivity, resistance, capacitance, inductance, frequency, temperature, or mass; optical, such as those based upon measurement of absorbance, refractive index, polarisation state, etc.; chemical, in which a chemical reaction with participation of the analyte gives rise to the analytical signal; biochemical, in which a biochemical process is the source of the analytical signal. Selectivity of a chemical sensor is its ability to respond to only one chemical in the presence of other species. The possible challenges pertaining to the sensor performance are noise, drift, low sensitivity, system stability, reuse possibility, sampling problems, measurement, complexity, and cost.`
    }
  };

  const trackData = {
    greenChemistry: {
      title: 'Green Chemistry',
      content: `Green Chemistry is a field of chemistry focused on designing chemical processes and products that minimize environmental impact, reduce waste, and promote sustainability. It seeks to create processes that are energy-efficient, use renewable resources, and are non-toxic. The goal is to make chemical production safer and more environmentally friendly, addressing concerns such as pollution, resource depletion, and health hazards.`
    },
    medicinalChemistry: {
      title: 'Medicinal Chemistry',
      content: `Medicinal Chemistry is a multidisciplinary field at the intersection of chemistry, pharmacology, and biology. It involves the design, synthesis, and development of pharmaceutical agents or drugs that are used to treat diseases, alleviate symptoms, or improve patient quality of life. Medicinal chemistry focuses on understanding the relationship between the chemical structure of a compound and its biological activity, as well as optimizing drug-like properties to create effective and safe medicines.`
    },
    computationalChemistry: {
      title: "Computational Chemistry",
      content: `Computational Chemistry is a branch of chemistry that uses computer simulations and mathematical models to understand and predict the behavior of molecules, atoms, and chemical reactions. It combines principles from chemistry, physics, and computer science to model the structure, properties, and reactivity of chemical systems. Computational chemistry provides insights that may be difficult or impossible to obtain experimentally, helping researchers in various fields, including drug design, materials science, and chemical engineering.`
    },
    modernSpectroscopicTechniques: {
      title: "Modern Spectroscopic Techniques",
      content: `Modern Spectroscopic Methods are powerful tools in chemistry, physics, and materials science that allow researchers to study the structure, properties, and behavior of molecules and atoms by analyzing how they interact with electromagnetic radiation. These methods provide detailed information about molecular identity, bonding, dynamics, and interactions. Advances in spectroscopic techniques have revolutionized various fields, including drug development, materials science, and environmental monitoring.`
    },
    nanomaterials: {
      title: "Nanomaterials",
      content: `Nanomaterials are materials with structures, properties, or behaviors that emerge at the nanoscale, typically ranging from 1 to 100 nanometers (nm). At this scale, materials can exhibit unique properties that are different from their bulk counterparts due to the increased surface area, quantum effects, and distinctive interactions between atoms or molecules. Nanomaterials can be made from a variety of substances, including metals, semiconductors, polymers, and ceramics.`
    },
    biochemistry: {
      title: "Biochemistry",
      content: `Biochemistry is the branch of science that explores the chemical processes and substances that occur within living organisms. It combines principles from chemistry, biology, and physics to understand the molecular mechanisms that underpin the functions of living systems. Biochemists study the structure, function, and interactions of biomolecules like proteins, lipids, nucleic acids, and carbohydrates, which are essential for life.`
    },
    pharmaceuticalChemistry: {
      title: "Pharmaceutical Chemistry",
      content: `Pharmaceutical Chemistry is the branch of chemistry that focuses on the design, development, synthesis, and analysis of pharmaceutical compounds or drugs. It is a multidisciplinary field that combines principles from organic chemistry, biochemistry, pharmacology, and medicinal chemistry to discover new drugs and improve existing ones. The goal of pharmaceutical chemistry is to understand the molecular interactions between drugs and biological systems to develop safe, effective, and high-quality therapeutic agents.`
    }
  };

  const mathematicalScience = {
    AppliedMathematics: {
      title: 'Applied Mathematics',
      content: `Applied mathematics is the branch of mathematics that focuses on using mathematical techniques and theories to solve real-world problems
       across various disciplines, from engineering and physics to economics and biology. It bridges the gap between pure mathematical theory and practical
        application, making it indispensable in addressing challenges in science, technology, and industry. The versatility of applied mathematics enables 
        it to model complex systems, optimize processes, and provide insights into 
      phenomena that would be difficult to understand through traditional methods alone.`
    },
    MathematicalModeling: {
      title: 'Mathematical Modeling',
      content: `Mathematical modeling
Mathematical modeling plays a crucial role in understanding and solving real-world problems across various disciplines. 
This conference highlights diverse sub-themes within the field, showcasing its broad applications from the natural and social 
sciences to engineering and technology. Topics of focus include data-driven modeling, optimization, stochastic processes, 
and the integration of machine learning with traditional mathematical techniques. Through the development of sophisticated models, 
we can better predict behaviors, design systems, and tackle complex challenges in fields ranging from ecology to economics. We look forward to 
an exciting exchange of ideas and discussions on the future directions of mathematical modeling in research and industry.`
    },
    FuzzyMathematics: {
      title: "Fuzzy Mathematics",
      content: `Fuzzy mathematics is an area of mathematics that deals with reasoning and modeling in situations where the data is imprecise, uncertain, or vague.
       Unlike classical (crisp) mathematics, which assumes that everything is either true or false, fuzzy mathematics allows for degrees of truth or membership. 
       This ability to handle partial
       truths and vague information makes it highly useful in various fields, such as engineering, decision-making, control systems, and artificial intelligence.`
    },
    DifferentialEquations: {
      title: "Differential Equations",
      content: `Differential equations are fundamental to understanding and modeling dynamic systems in a wide range of fields, 
      including physics, engineering, biology, and economics. This conference brings together researchers to explore the latest advances in 
      both the theoretical and applied aspects of differential equations. Key sub-themes include the study of ordinary and partial differential
       equations, numerical methods for solving these equations, and their applications in modeling real-world phenomena such as fluid dynamics, 
       population growth, and disease spread. We will also delve into the cutting-edge areas of nonlinear, stochastic, and fractional differential 
       equations, which offer new insights into complex, real-world systems. The conference aims to foster collaboration and innovation, 
      highlighting the powerful role of differential equations in shaping our understanding of the world around us.`
    },
    Topology: {
      title: "Topology",
      content: `Topology, the study of the properties of space that are preserved under continuous transformations, has profound 
      implications across a wide array of mathematical and scientific disciplines. This conference gathers experts to explore recent
       advancements in both the theory and applications of topology. Key topics include general topology, algebraic and geometric topology,
        and the connections between topology and geometry. We will also delve into cutting-edge research in areas such as topological data analysis, 
        dynamical systems, and topological quantum field theory. The conference aims to foster dialogue and collaboration, showcasing the versatility 
      of topological concepts in solving complex problems across mathematics, physics, and data science`
    },
    Algebra: {
      title: "Algebra",
      content: `Algebra is a cornerstone of modern mathematics, providing a unifying language for a wide range of mathematical disciplines. 
      This conference explores the latest developments in both the theoretical and applied aspects of algebra. Topics include group theory, ring 
      and field theory, linear algebra, and homological algebra, as well as more specialized areas such as representation theory, commutative algebra, 
      and algebraic geometry. We will also highlight the role of algebra in emerging fields like cryptography and computational algebra. Through this gathering, 
      we aim to deepen our understanding of algebra's profound impact on mathematics, science, and technology`
    },
    ProbabilityandStatistics: {
      title: "Probability and Statistics",
      content: `Probability and Statistics are essential fields that empower researchers to make informed decisions based on data and to model 
      uncertainty across various domains. This conference brings together experts to explore the latest developments and applications in these fields, 
      covering core topics such as probability theory, statistical inference, and Bayesian methods. We will also delve into advanced areas including 
      stochastic processes, time series analysis, multivariate statistics, and statistical modeling. Additionally, the conference will feature discussions 
      on emerging trends in statistical computing, nonparametric methods, and the use of data science in tackling real-world challenges. We look forward 
      to a stimulating exchange of ideas and 
      collaborative efforts in advancing the science of data.`,
    },
    AppliedStatisticsInference: {
      title: 'Applied Statistics Inference',
      content: `Applied statistical inference plays a pivotal role in extracting meaningful insights from data, allowing researchers to draw valid 
      conclusions while accounting for uncertainty. This conference brings together experts to explore cutting-edge developments in statistical 
      inference methods, such as hypothesis testing, Bayesian inference, and maximum likelihood estimation. We will also delve into modern techniques 
      like model selection, nonparametric methods, and time series analysis. Additionally, there will be sessions on applying statistical inference to
       complex real-world problems, from big data to survival analysis and robust statistical methods. We invite participants to engage in an exciting 
       exchange of ideas and methodologies that 
      advance the field of applied statistical inference.`
    },
    SamplingTechniques: {
      title: 'Sampling Techniques',
      content: `Sampling techniques are essential for making inferences about populations based on limited data, and they play a critical role in 
      ensuring the accuracy and reliability of statistical analyses. This conference brings together researchers to explore the latest advancements 
      in sampling methodologies, from traditional methods like simple random and stratified sampling to more complex approaches such as adaptive and 
      multistage sampling. We will also delve into emerging challenges, including sampling for big data, resampling methods, and techniques for
       hard-to-reach populations. Join us for insightful discussions on how innovative sampling techniques are shaping research across fields such
        as healthcare, social sciences,
       marketing, and environmental studies`
    },
    NumericalTechniques: {
      title: "Numerical Techniques",
      content: `Numerical techniques are vital for solving real-world mathematical problems that cannot be solved analytically.
       This conference focuses on the latest advancements in numerical methods, from solving differential equations and linear systems to
        optimization and interpolation techniques. We will explore cutting-edge topics such as Monte Carlo methods, numerical stability, and 
        parallel computing, as well as the challenges and opportunities presented by high-performance computing. Join us as we delve into how 
        numerical techniques are transforming research and 
      applications across disciplines including engineering, physics, economics, and data science`
    },
    OperationResearch: {
      title: "Operation Research",
      content: `Modern Spectroscopic Methods are powerful tools in chemistry, physics, and materials science that allow researchers to study the structure, properties, and behavior of molecules and atoms by analyzing how they interact with electromagnetic radiation. These methods provide detailed information about molecular identity, bonding, dynamics, and interactions. Advances in spectroscopic techniques have revolutionized various fields, including drug development, materials science, and environmental monitoring.`
    },
    GraphTheory: {
      title: "Graph Theory",
      content: `Graph theory is a vibrant and ever-evolving field with profound applications in computer science, biology, economics, and beyond. 
      This conference brings together leading researchers to explore the latest developments in both theoretical and applied graph theory. 
      Topics include graph connectivity, graph coloring, and planarity, as well as cutting-edge algorithms for optimization and network flow analysis.
       We will also explore random graphs, spectral graph theory, and the rich applications of graph theory in social networks, computer networks, and data science.
        The conference provides a platform for sharing innovative research that bridges pure mathematics
       with real-world challenges.`
    },
    OptimizationTechniquese: {
      title: "Optimization Techniques",
      content: `Optimization techniques are central to solving complex real-world problems across a wide range of disciplines,
       from engineering and economics to machine learning and logistics. This conference brings together experts to explore the
        latest advancements in optimization methods, including linear and nonlinear programming, integer programming, and
         combinatorial optimization. We will delve into both classical techniques and cutting-edge approaches such as stochastic optimization,
          multi-objective optimization, and metaheuristic methods. The conference also highlights the growing importance of optimization in fields 
          like machine learning, network design, and data science. Join us for an exciting exchange of ideas aimed at pushing the boundaries of optimization 
      theory and practice.`
    },
    FluidMechanics: {
      title: "Fluid Mechanics",
      content: `Fluid Mechanics is a fundamental branch of physics and engineering that focuses on the behavior of fluids (liquids and gases) at rest 
      and in motion. It is integral to a wide range of applications, from aerospace and mechanical engineering to civil, chemical, and biomedical engineering.
       The study of fluid mechanics helps 
      in understanding and solving complex problems related to fluid flow, pressure distribution, turbulence, and energy transfer in various systems.`,
    },
  }


  const management = {
    Marketing: {
      title: "Marketing",
      content: `Marketing is an organizational function that involves creating, communicating, and delivering value to customers while managing customer 
      relationships to benefit both the organization and its stakeholders. It focuses on understanding customer needs, developing products that meet those
       needs, and ensuring effective communication of value propositions. Marketing plays a key role in building strong relationships with customers,
        driving customer satisfaction, and fostering long-term business success. Through these efforts, 
      it contributes to the overall growth and sustainability of industries and organizations.`
    },
    BrandManagement: {
      title: "Brand Management",
      content: `Brand management is the process of designing and implementing marketing programs that build, measure, and manage brand equity.
       Strategic brand management involves identifying and establishing brand positioning, planning and executing brand marketing programs, measuring 
       brand performance, and sustaining long-term brand equity. This approach focuses on creating strong emotional 
      and rational associations with consumers, which increases brand loyalty, market share, and overall business performance.`
    },
    ConsumerBehavior: {
      title:"Consumer Behaviour",
      content: `Consumer behavior is the study of how individuals, groups, and organizations select, buy, use, and dispose of products to satisfy their needs and wants. Understanding consumer behavior is essential to marketing as it helps businesses design products, strategies, and campaigns that align with consumer preferences and decision-making processes. Insights into consumer behavior drive innovation by identifying emerging trends and demands and guiding the development of technologies and products. This knowledge fosters industrial growth, enhances market competitiveness, and contributes to national development by creating solutions that address societal needs efficiently.`,
    },
    Ecommercemanagement: {
      title: "E-commerce & management",
      content: `E-commerce , or electronic commerce, involves conducting business transactions online through internet-based technologies like electronic data exchange, email, and electronic fund transfers. It enables the paperless exchange of goods, services, and information, making business operations faster, more efficient, and cost-effective. E-commerce spans various domains, including B2B, B2C, and C2C transactions, facilitating global trade and digital marketplaces. Its growing role in online shopping, travel bookings, and financial services contributes significantly to economic growth by expanding markets and fostering innovation.`
    },

    FinancialManagement:{
      title:"Financial Management",
      content:`Financial Management involves strategic decisions in the area of investing, financing, and dividend decisions. Investing decisions focus on allocating resources to projects that maximize returns, supporting engineering innovations and industrial growth. Financing decisions determine the optimal mix of debt and equity to fund these investments, while dividend decisions balance profit distribution and reinvestment to ensure sustainable development and shareholder satisfaction. Financial Management is essential for efficient financial planning and control, enabling organizations to drive innovation, sustain operations,
       and achieve long-term growth. By aligning financial strategies with engineering goals, it fosters economic efficiency and industrial competitiveness.`},
    
       Economics:{
      title:"Economics",
      content:`Economics is the study of how individuals, businesses, and governments allocate scarce resources to meet their needs 
      and wants. Managers need to understand economics to make informed decisions about resource allocation, pricing, production, and market strategies, enabling them to optimize organizational efficiency and profitability. Economics supports managerial functions by providing frameworks to analyze consumer behavior, market trends, and competitive dynamics, aiding in the achievement of organizational objectives. At the macro level, economics fosters national growth by shaping policies that impact national income, stabilize business cycles, control inflation, and optimize international trade.
       These measures enhance economic stability, promote global integration, and ensure sustainable development and competitiveness.`
    },
    HumanResourceManagement:{
      title:"Human Resource Management",
      content:`Human Resource Management is a strategic approach to effectively managing an organization’s workforce.
       It encompasses activities like workforce planning, recruitment, training, development, performance appraisal, employee welfare, and industrial relations, ensuring optimal utilization of human resources to achieve organizational goals. HRM aims to create an environment conducive to maximizing productivity, fostering motivation, and ensuring employee well-being. HRM is critical for business organizations as it aligns employee skills and motivation with strategic objectives, driving productivity and innovation. By fostering a 
      skilled and motivated workforce, HRM supports economic growth and national development, ensuring long-term sustainability and competitiveness.`
    }

  }

  const toggleModal = (trackName) => {
    if (!showModal) {
      const iconPosition = iconRefs[trackName].current.getBoundingClientRect();
      setModalPosition({
        top: iconPosition.bottom + window.scrollY,
        left: iconPosition.left + window.scrollX,
      });
    }

    setShowModal(!showModal);
    setSelectedTrack(trackName);
    setIsRotated((prevState) => ({
      ...prevState,
      [trackName]: !prevState[trackName],
    }));
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedTrack(null);
  };

  // Combine all data
  const combinedTrackData = { ...physicalScience, ...trackData, ...mathematicalScience, ...management };

  return (
    <>
      <HeaderUpper />
      <LowerHeader />

      {/* Conference Tracks Section */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center text-black mb-8 animate-flash">
            Conference Tracks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Left Column: Track 1, Track 2, Track 3 */}
            <div className="border-2 border-gray-300 rounded-lg p-4">
              <h3 className="text-2xl font-bold text-red-500 mb-4 border-b-2 border-dotted border-gray-400 pb-2">
                TRACK 1– Physical Sciences
              </h3>
              <ul className="list-inside space-y-2 text-lg text-gray-700">
              <li>Nuclear and Particle Physics</li>
                <li>Quantum Materials and Topological Insulators: Theoretical and Experimental Insights</li>
                <li>Synthesis and characterization of nanomaterials</li>
                <li>Nanostructured materials</li>
                <li>Solar cells</li>
                <li>Chemical sensors</li>
                <li>Soft Matter Physics:Modelling and Simulation</li>
                <li>Plasma Physics in Material Synthesis and Processing</li>
                <li>Magnetic Materials: Theory, Synthesis, and Characterization</li>
                <li>Advanced Spectroscopic Techniques for Material Analysis</li>
                <li>Biophysics: Bridging Physics and Biology in Materials Research</li>
              </ul>

              <h3 className="text-2xl font-bold text-rose-700 mt-8 mb-4 border-b-2 border-dotted border-gray-400 pb-2">
                TRACK 2– Chemical Sciences
              </h3>
              <ul className="list-inside space-y-2 text-lg text-gray-700">
                {Object.keys(trackData).map((trackKey) => (
                  <Track
                    key={trackKey}
                    trackName={trackKey}
                    trackTitle={trackData[trackKey].title}
                    trackContent={trackData[trackKey].content}
                    onToggle={toggleModal}
                    isRotated={isRotated[trackKey]}
                    iconRef={iconRefs[trackKey]}
                  />
                ))}
              </ul>

              <h3 className="text-2xl font-bold text-red-900 mt-8 mb-4 border-b-2 border-dotted border-gray-400 pb-2">
                TRACK 3– Mathematical Sciences
              </h3>
              <ul className="list-inside space-y-2 text-lg text-gray-700">
                {Object.keys(mathematicalScience).map((trackKey) => (
                  <Track
                    key={trackKey}
                    trackName={trackKey}
                    trackTitle={mathematicalScience[trackKey].title}
                    trackContent={mathematicalScience[trackKey].content}
                    onToggle={toggleModal}
                    isRotated={isRotated[trackKey]}
                    iconRef={iconRefs[trackKey]}
                  />
                ))}
              </ul>

            </div>

            {/* Right Column: Track 4 (Humanities & Management Sciences) */}
            <div className="border-2 border-gray-300 rounded-lg p-4">
              <h3 className="text-2xl font-bold text-red-950 mb-4 border-b-2 border-dotted border-gray-400 pb-2">
                TRACK 4– Humanities & Management Sciences
              </h3>
              <h4 className="text-xl font-bold text-indigo-600 mb-4">English, Psychology, Sociology and Communication Studies:</h4>
              <ul className="list-inside space-y-2 text-lg text-gray-700">
                <li>European Languages and Literatures</li>
                <li>Comparative Literature</li>
                <li>Literary Theories</li>
                <li>Diaspora/Gender/Culture studies</li>
                <li>Linguistics</li>
                <li>Language Politics and Education</li>
                <li>Forensic Linguistics</li>
                <li>Latin American Literature/Global South Literature</li>
                <li>Communication Studies/Life Skills</li>
                <li>Language and Translation Challenges</li>
                <li>Science Fiction</li>
                <li>ELT</li>
                <li>Value Education</li>
                <li>Sports and Psychology</li>
                <li>Risk and Resilience</li>
                <li>Challenges of 21st Century: Democracy, Environment, Inequalities, Inter-sectionality</li>
                <li>Emotion, reliance and well being</li>
                <li>Mental Health and COVID19: Life after the pandemic</li>
                <li>Psychological problems of children and adolescents</li>
              </ul>

              <h4 className="text-xl font-bold text-indigo-600 mt-8 mb-4 border-b-2 border-dotted border-gray-400 pb-2">Management:</h4>
              <ul className="list-inside space-y-2 text-lg text-gray-700">
                {Object.keys(management).map((trackKey) => (
                  <Track
                    key={trackKey}
                    trackName={trackKey}
                    trackTitle={management[trackKey].title}
                    trackContent={management[trackKey].content}
                    onToggle={toggleModal}
                    isRotated={isRotated[trackKey]}
                    iconRef={iconRefs[trackKey]}
                  />
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Modal  For Chemical Science*/}
      {showModal && selectedTrack && (
        <div
          className="absolute z-50"
          style={{
            top: modalPosition.top,
            left: modalPosition.left,
            transform: 'translateY(10px)',
          }}
        >
          {/* Modal for larger screens */}
          <div className="bg-green-100 p-8 rounded-lg w-full  max-w-96 shadow-lg md:w-94 md:h-200 md:max-w-full ">

            {/* Modal content */}
            <h2 className="text-2xl font-bold text-center text-black mb-4">
              {combinedTrackData[selectedTrack].title}
            </h2>
            <p className="text-lg text-gray-700 ">
              {combinedTrackData[selectedTrack].content}
            </p>
          </div>
        </div>
      )}

      {/* Full screen modal for smaller screens */}
      {showModal && selectedTrack && (
        <div className="md:hidden fixed z-50 w-full h-full top-0 left-0 bg-black bg-opacity-50 flex justify-center items-center ">
          <div className="bg-green-100 p-8 rounded-lg w-full h-full shadow-lg relative overflow-hidden overflow-y-scroll">
            <h2 className="text-2xl font-bold text-center text-black mb-4">
              {combinedTrackData[selectedTrack].title}
            </h2>
            <p className="text-2xl text-gray-800">
              {combinedTrackData[selectedTrack].content}
            </p>

            {/* Close button for small screens */}
            <button
              className="absolute top-4 right-4 text-gray-500 text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default ConferencePage;
