import React from 'react';
import '@fontsource/roboto';
import '@fontsource/montserrat';

function Navbar() {
  return (
    <div className=' fixed z-[999] w-full h-20 px-20 py-0 flex font-bold flex-row justify-between items-center mt-[-1vh] bg-[#8FB056]' style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 300 }}>
      <div className='logo '>
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="1px" y="1px"
	 width="50%" viewBox="100 10 1000 708" enable-background="new 0 0 1024 768" xml:space="preserve">
<path fill="#000000" opacity="1.000000" stroke="none" 
	d="
M295.388824,540.661621 
	C273.767242,526.876282 252.449234,513.289124 231.417847,499.884735 
	C231.203430,497.352844 232.788422,496.363861 233.725449,495.072601 
	C243.459579,481.658203 243.453949,464.545105 233.256989,451.430542 
	C230.891342,448.388000 231.165787,446.665588 233.452118,443.821045 
	C243.356110,431.498962 243.474228,413.107056 233.578400,400.741150 
	C230.931305,397.433319 231.178955,395.577271 233.558853,392.288422 
	C242.736908,379.605011 243.528854,366.113495 235.702728,352.480499 
	C233.802521,349.170319 233.795547,347.552979 237.280350,345.463440 
	C276.564117,321.908417 315.778839,298.237885 354.940277,274.479980 
	C358.236145,272.480499 360.725708,272.492188 364.024384,274.532837 
	C398.018951,295.562561 431.962799,316.681030 466.220337,337.276520 
	C490.494812,351.870300 494.158081,379.244720 481.427307,397.431519 
	C479.966827,399.517944 480.551605,401.022583 481.694519,402.849731 
	C491.079681,417.853180 491.042908,432.979156 482.003876,448.090912 
	C480.676941,450.309296 480.315460,451.929443 481.851379,454.374115 
	C494.636292,474.723480 489.194397,498.991699 468.846924,511.887665 
	C445.073120,526.955139 421.153046,541.792053 397.277679,556.698975 
	C389.085266,561.814026 380.862488,566.881653 372.606476,571.893372 
	C363.114380,577.655396 353.618652,577.276917 344.321198,571.465027 
	C328.080536,561.312988 311.898804,551.066711 295.388824,540.661621 
M413.914886,319.634033 
	C397.138031,309.392242 380.318787,299.218750 363.622528,288.847198 
	C360.529419,286.925812 358.197449,286.910553 355.047699,288.818787 
	C324.420654,307.374084 293.690704,325.759369 263.014191,344.233185 
	C261.373352,345.221283 259.332825,345.891754 258.583710,348.322052 
	C260.373138,350.502502 262.958374,351.719788 265.306396,353.201782 
	C297.422821,373.472626 329.404846,393.963135 361.765045,413.837646 
	C373.954712,421.324066 384.865753,429.133026 386.738525,444.654510 
	C386.751556,444.762360 386.985382,444.843536 387.176575,444.980438 
	C388.743561,445.222412 390.015686,444.324585 391.254608,443.551880 
	C415.424805,428.477997 439.676025,413.530365 463.685974,398.204926 
	C474.090088,391.564026 478.326965,379.816498 475.792297,367.694061 
	C473.950439,358.885101 468.254303,352.985443 460.986298,348.468170 
	C445.565155,338.883575 430.023407,329.492920 413.914886,319.634033 
M322.593964,440.848022 
	C332.029022,446.808197 341.434906,452.815399 350.915680,458.701935 
	C354.040985,460.642395 357.292175,462.196014 361.272247,461.106750 
	C367.728607,459.339691 372.807922,454.270874 373.629089,448.092316 
	C374.590912,440.855591 372.332672,435.042145 365.916626,431.004791 
	C332.080048,409.712799 298.291962,388.343658 264.447601,367.064056 
	C260.491058,364.576385 256.736145,361.657654 251.658722,359.720490 
	C254.079483,369.570496 253.092651,378.712158 249.643661,387.285339 
	C247.616928,392.323242 249.342987,394.400848 253.197601,396.827637 
	C276.175385,411.293976 299.058838,425.910126 322.593964,440.848022 
M326.069458,457.488617 
	C301.651978,442.065002 277.234528,426.641388 251.709503,410.518188 
	C253.905579,421.318207 252.941818,430.534912 249.460785,439.324860 
	C247.818710,443.471130 248.826706,445.484741 252.450180,447.753967 
	C273.334564,460.832642 294.064270,474.158234 314.849121,487.395905 
	C326.646088,494.909241 338.449371,502.412750 350.247650,509.924103 
	C355.257141,513.113403 360.342010,513.985901 365.734283,510.746185 
	C376.280823,504.409760 376.804962,489.539124 366.441223,482.850769 
	C353.292847,474.365295 339.937805,466.200073 326.069458,457.488617 
M256.180359,501.276978 
	C270.927582,510.661560 285.678223,520.040710 300.421112,529.432068 
	C316.709717,539.808105 332.983490,550.207397 349.279083,560.572449 
	C357.200348,565.610962 364.359772,564.868896 369.882721,558.508728 
	C376.506287,550.881104 374.848511,539.320496 366.100922,533.774170 
	C356.682617,527.802612 347.024902,522.208984 337.597870,516.250732 
	C310.296082,498.994934 283.061279,481.633087 255.779999,464.344727 
	C254.756653,463.696198 253.838898,462.454620 251.918076,463.237793 
	C253.566666,471.310211 252.938309,479.359863 250.604797,487.278961 
	C248.052399,495.940857 248.033524,495.935303 256.180359,501.276978 
M400.383270,451.918365 
	C392.362091,456.983643 384.344727,462.054962 376.318298,467.111877 
	C371.683746,470.031708 371.530457,470.941711 375.534180,474.256195 
	C381.054016,478.825714 384.150940,484.705200 385.331909,491.686432 
	C385.633514,493.469513 385.702576,495.359802 387.712952,496.533203 
	C388.551849,496.209229 389.552673,495.992523 390.370331,495.482300 
	C415.084198,480.061096 439.933197,464.848511 464.412140,449.062225 
	C476.140839,441.498505 479.682343,426.294861 473.823059,413.571594 
	C471.368408,408.241364 470.737732,407.967712 465.788574,411.048615 
	C444.168945,424.507080 422.585754,438.024078 400.383270,451.918365 
M385.334808,542.145874 
	C386.829987,547.996399 387.481232,548.313354 392.522766,545.217957 
	C403.019135,538.773376 413.561768,532.398621 423.932892,525.757080 
	C437.805206,516.873352 452.324341,508.964905 465.562866,499.140564 
	C476.088928,491.329224 479.291840,477.380707 474.102753,465.494049 
	C471.714935,460.024231 470.623901,459.556366 465.692963,462.638702 
	C435.633942,481.428650 405.610931,500.276215 375.582703,519.115356 
	C374.351379,519.887878 372.830170,520.429382 372.541382,522.716309 
	C378.338196,527.611633 383.792999,533.174805 385.334808,542.145874 
z"/>
<path fill="#000000" opacity="1.000000" stroke="none" 
	d="
M526.043335,392.000000 
	C526.046753,382.513794 526.008240,373.527283 526.081116,364.541656 
	C526.099915,362.225250 526.292480,359.878662 526.718140,357.604523 
	C527.374817,354.096069 529.504395,351.766388 533.232727,352.024139 
	C536.760803,352.268066 539.098083,354.333344 539.356628,358.078735 
	C539.619812,361.891541 539.708740,365.716217 539.889160,369.534973 
	C539.997986,371.838928 539.541199,374.195923 540.464844,376.409058 
	C541.854370,377.145477 542.693176,376.067291 543.619019,375.497040 
	C558.018127,366.627808 574.000122,373.021698 577.803284,389.385284 
	C579.728638,397.669189 579.325256,405.935272 575.530579,413.730652 
	C569.247253,426.638519 554.075256,430.099884 542.724121,421.307800 
	C542.075989,420.805756 541.427429,420.304260 540.847412,419.855438 
	C540.381287,420.028229 539.901550,420.061768 539.823547,420.256378 
	C538.331665,423.977417 535.973938,426.789307 531.617981,425.910400 
	C526.913269,424.961151 526.174622,420.903992 526.099792,416.961395 
	C525.945129,408.810181 526.046753,400.654083 526.043335,392.000000 
M563.836975,404.202606 
	C565.361389,399.536774 564.649719,394.948669 563.127075,390.475159 
	C561.544434,385.825226 558.309753,382.728302 553.290100,382.489410 
	C548.332703,382.253540 544.655701,384.861603 542.513062,389.262848 
	C540.343567,393.719299 539.743103,398.488464 540.741028,403.389954 
	C542.184631,410.480560 545.824341,414.264221 551.558838,414.691864 
	C557.309692,415.120697 561.178955,412.021851 563.836975,404.202606 
z"/>
<path fill="#000000" opacity="1.000000" stroke="none" 
	d="
M738.827271,385.795959 
	C732.106445,391.506287 732.108704,391.504852 736.549805,398.566803 
	C740.008789,404.066986 743.562683,409.510956 746.882385,415.094055 
	C749.243591,419.064911 748.366394,423.174042 744.944641,425.121552 
	C740.959473,427.389801 737.792908,425.908478 735.514709,422.447174 
	C732.127441,417.300751 729.007874,411.978729 725.726257,406.761719 
	C724.773438,405.246887 724.181946,403.392609 722.045532,402.526794 
	C718.303284,404.630066 715.670715,407.367004 716.108276,412.291504 
	C716.327209,414.755066 716.211975,417.318054 715.781494,419.753632 
	C715.094177,423.642059 712.606262,426.111725 708.573914,426.088196 
	C704.373108,426.063690 702.457764,423.191803 701.844543,419.346100 
	C701.662354,418.203278 701.698364,417.019745 701.697815,415.854797 
	C701.689514,398.190125 701.669861,380.525452 701.702454,362.860840 
	C701.715637,355.726654 704.070618,352.018433 708.512939,351.865387 
	C713.310974,351.700104 716.075317,355.513031 716.140198,362.694061 
	C716.218262,371.324097 716.158630,379.955414 716.158630,389.243042 
	C720.641907,387.290161 722.535034,383.599518 725.405273,381.059326 
	C727.894531,378.856232 730.045166,376.275177 732.468750,373.992096 
	C735.521240,371.116577 739.054321,370.417877 742.313538,373.332611 
	C745.727417,376.385620 744.167419,379.641998 741.769653,382.592102 
	C740.930908,383.624054 739.983154,384.567352 738.827271,385.795959 
z"/>
<path fill="#000000" opacity="1.000000" stroke="none" 
	d="
M758.000610,483.460876 
	C757.691101,491.532959 750.524841,497.996368 740.488037,499.100494 
	C729.764587,500.280121 719.483215,498.984558 712.866333,489.175262 
	C706.046631,479.065308 706.179993,468.083466 711.303223,457.312347 
	C715.837280,447.779755 727.027710,443.014801 738.991272,444.884796 
	C749.783447,446.571686 757.457397,454.231934 759.082947,464.940735 
	C760.021240,471.121704 757.748413,474.520020 751.602905,475.589539 
	C744.498230,476.826019 737.307312,475.916443 730.157776,476.112762 
	C727.868652,476.175629 725.576416,476.122620 723.112610,476.122620 
	C722.711853,481.780151 724.933594,485.357056 729.041504,487.892120 
	C733.728210,490.784302 738.366882,489.881317 742.708984,487.181671 
	C745.095093,485.698212 747.093384,483.605286 749.365234,481.920380 
	C752.522705,479.578766 755.483582,479.449707 758.000610,483.460876 
M729.742920,467.017090 
	C733.396484,467.008026 737.051208,466.939545 740.703369,467.005920 
	C744.679382,467.078125 745.162537,465.161530 743.913513,461.913544 
	C741.982117,456.891144 737.023315,454.242279 731.396423,455.366455 
	C726.658569,456.313049 723.488281,460.727325 723.503601,466.402618 
	C725.178406,467.399384 727.048279,466.878601 729.742920,467.017090 
z"/>
<path fill="#000000" opacity="1.000000" stroke="none" 
	d="
M694.127136,406.688110 
	C690.021057,419.189178 682.089722,425.532471 670.122070,426.216370 
	C658.489563,426.881073 648.628113,421.534393 644.134460,412.126343 
	C639.208496,401.813232 641.047974,387.093536 648.240417,379.268951 
	C655.496033,371.375732 669.854065,369.071991 680.673401,374.064911 
	C690.650757,378.669312 696.565430,390.138336 694.988586,401.866547 
	C694.789490,403.347137 694.478210,404.812622 694.127136,406.688110 
M679.177917,390.595856 
	C676.171265,384.623657 671.957703,381.848267 666.851440,382.476685 
	C661.821960,383.095703 657.986877,386.516632 656.710083,392.100128 
	C655.630371,396.822174 655.501465,401.664978 657.002258,406.354279 
	C658.832458,412.072815 662.890381,415.031677 668.375366,414.922699 
	C673.909241,414.812744 677.769043,411.674744 679.576477,406.031128 
	C681.157288,401.095306 680.760925,396.222198 679.177917,390.595856 
z"/>
<path fill="#000000" opacity="1.000000" stroke="none" 
	d="
M609.757324,466.141602 
	C613.954590,450.635315 623.262878,443.853149 638.590393,444.743500 
	C653.060364,445.584045 663.231018,457.003204 663.073669,472.232086 
	C662.911926,487.877563 652.484863,498.686188 637.757263,499.432343 
	C621.815613,500.239929 606.801880,489.489746 609.757324,466.141602 
M644.380798,484.871246 
	C649.780762,477.963806 649.598816,470.402100 646.645813,462.718170 
	C644.770386,457.838074 640.642883,455.560089 635.611572,455.694305 
	C630.750366,455.823975 626.994995,458.337250 625.397766,463.106659 
	C624.458435,465.911621 623.536560,468.948700 623.661072,471.835968 
	C623.911804,477.648071 624.529480,483.654236 630.463501,486.963928 
	C635.222412,489.618134 639.728943,488.796234 644.380798,484.871246 
z"/>
<path fill="#000000" opacity="1.000000" stroke="none" 
	d="
M591.304016,378.277039 
	C598.630554,371.740448 607.127258,370.595245 615.951965,371.957947 
	C629.152954,373.996490 637.681396,385.533630 637.168823,399.895233 
	C636.649719,414.444000 627.502380,424.491821 613.299377,426.114655 
	C599.473999,427.694336 587.451660,420.072510 584.484375,406.956207 
	C582.158325,396.674286 583.193481,386.692078 591.304016,378.277039 
M622.270996,394.355438 
	C622.051147,393.380524 621.894775,392.386078 621.601135,391.433929 
	C619.888977,385.882263 615.564819,382.420258 610.361572,382.392151 
	C604.946472,382.362885 600.691772,385.470459 598.982544,391.173370 
	C597.472778,396.210510 597.521912,401.412628 598.969910,406.452576 
	C600.585632,412.076355 604.397034,414.850952 609.913574,414.940887 
	C615.625488,415.033966 619.611145,412.163391 621.479919,406.513763 
	C622.701477,402.821045 623.013367,399.026611 622.270996,394.355438 
z"/>
<path fill="#000000" opacity="1.000000" stroke="none" 
	d="
M751.198914,413.476868 
	C750.589844,409.644104 751.955750,407.131805 755.226013,406.047607 
	C758.633789,404.917786 761.135742,406.668488 762.686218,409.535248 
	C766.470276,416.532318 774.508789,417.792664 779.398376,415.553009 
	C781.345032,414.661316 782.784180,413.457214 782.888184,411.136658 
	C782.989868,408.868073 781.954285,407.156219 779.947388,406.360931 
	C777.019897,405.200897 773.992554,404.266388 770.959717,403.404907 
	C766.631592,402.175598 762.235657,401.116425 758.387573,398.677612 
	C749.784607,393.225464 749.271118,382.290222 757.269653,375.998199 
	C765.361389,369.632843 782.955566,370.034973 790.630615,376.779877 
	C792.141907,378.108002 793.583008,379.571136 794.147827,381.546570 
	C794.869995,384.071960 794.827271,386.565247 792.480713,388.351746 
	C790.147705,390.128052 787.541077,390.573853 785.070557,388.829987 
	C783.466858,387.697998 782.108032,386.167694 780.804504,384.672028 
	C777.815063,381.242126 773.992004,380.697021 769.865356,381.481293 
	C767.678162,381.896942 765.662231,382.945496 765.381409,385.524689 
	C765.112427,387.994598 766.919800,389.170898 768.845276,389.822388 
	C772.937683,391.207031 777.092590,392.418152 781.256775,393.575104 
	C784.322937,394.427032 787.296387,395.452728 790.018921,397.121033 
	C799.177124,402.733124 799.788269,414.890930 791.245178,421.430054 
	C782.851196,427.854950 765.066528,427.879944 756.688049,421.462585 
	C754.112366,419.489777 752.165833,417.051697 751.198914,413.476868 
z"/>
<path fill="#000000" opacity="1.000000" stroke="none" 
	d="
M536.423401,445.992371 
	C543.777039,443.928223 550.657593,444.363129 557.416687,446.744995 
	C561.093384,448.040710 564.393250,449.999390 566.294067,453.593658 
	C567.837097,456.511383 567.966248,459.441040 565.100037,461.667603 
	C562.395020,463.769043 559.519104,463.704224 556.909485,461.407074 
	C555.416321,460.092682 554.145691,458.528931 552.699951,457.156372 
	C549.472717,454.092529 545.671021,453.579102 541.587158,454.972229 
	C539.788757,455.585724 538.351685,456.749878 538.156433,458.855591 
	C537.950500,461.077301 539.360352,462.293701 541.161316,462.933014 
	C544.285706,464.042114 547.477112,464.970032 550.663757,465.893616 
	C554.495300,467.004089 558.345764,467.990753 561.919434,469.884644 
	C567.060059,472.608948 570.269226,476.604828 570.050903,482.556030 
	C569.828064,488.632935 567.121765,493.663696 561.487549,496.219849 
	C551.408875,500.792480 541.192932,500.839935 531.186768,495.726166 
	C528.278137,494.239716 526.177307,491.917999 524.842529,488.919922 
	C523.245728,485.333344 523.183044,481.954407 526.979126,479.804596 
	C530.687317,477.704529 533.414734,479.649536 535.302429,482.803986 
	C538.357666,487.909698 542.719727,490.325165 548.626404,489.663361 
	C551.832458,489.304169 555.118164,488.601349 555.691895,484.648071 
	C556.260376,480.730804 553.218201,479.517365 550.327942,478.560638 
	C545.755249,477.046997 541.058533,475.900146 536.511353,474.319183 
	C530.046692,472.071533 524.704468,468.641602 524.645752,460.745819 
	C524.587402,452.897827 529.273438,448.686584 536.423401,445.992371 
z"/>
<path fill="#000000" opacity="1.000000" stroke="none" 
	d="
M593.352173,464.176208 
	C593.356018,470.311981 593.233704,475.974854 593.402527,481.629028 
	C593.559753,486.891968 594.966553,487.979767 600.169800,487.711395 
	C603.896484,487.519226 608.750549,486.213806 609.618042,491.416595 
	C610.439087,496.340820 605.551331,497.227234 602.041504,498.454224 
	C597.862854,499.915070 593.458496,499.714020 589.201355,498.931915 
	C583.325806,497.852509 580.449585,494.205414 579.673889,487.720825 
	C578.621826,478.925690 579.209106,470.098083 579.151489,461.284760 
	C579.134644,458.701202 579.505005,456.355469 575.731750,456.023254 
	C573.335327,455.812317 572.169556,453.667603 572.000305,451.325623 
	C571.840820,449.118225 572.860413,447.195435 574.981995,446.641968 
	C578.738770,445.661865 579.278748,443.166107 579.149597,439.861816 
	C579.059326,437.553558 579.395996,435.214142 579.695007,432.908478 
	C580.204590,428.978149 582.752502,426.924011 586.487793,426.948273 
	C590.282043,426.972900 592.730469,429.303833 593.165283,433.100037 
	C593.504456,436.060577 593.385498,439.084686 593.319153,442.077179 
	C593.264282,444.547180 594.209595,445.847778 596.788147,445.795868 
	C597.612244,445.779327 598.462341,445.862518 599.262268,446.057281 
	C601.915771,446.703339 603.903503,448.170898 603.976074,451.097595 
	C604.051270,454.131744 601.891052,456.035522 599.309448,455.984558 
	C593.429810,455.868347 592.928406,459.279785 593.352173,464.176208 
z"/>
<path fill="#000000" opacity="1.000000" stroke="none" 
	d="
M706.682312,456.587769 
	C703.991028,459.568207 701.140564,458.917145 698.125183,458.085602 
	C691.001953,456.121155 687.958740,458.057190 686.227905,465.282349 
	C684.531921,472.361969 685.538269,479.550262 685.228699,486.684967 
	C685.128174,489.003510 685.189087,491.389648 684.644104,493.614532 
	C683.764709,497.205170 681.404480,499.392456 677.464661,499.278381 
	C673.385010,499.160278 671.061768,496.481445 670.995789,492.937744 
	C670.735168,478.952271 670.802002,464.956573 671.033936,450.969421 
	C671.082092,448.065247 672.856323,445.548401 676.116760,444.903473 
	C679.189514,444.295624 681.694397,445.285645 683.450989,447.965790 
	C683.881226,448.622192 684.357910,449.248138 685.032959,450.196930 
	C690.473083,443.741150 696.839050,443.279144 703.630615,446.833893 
	C707.453674,448.834839 709.422302,451.883942 706.682312,456.587769 
z"/>
</svg>
</div>
<div className='flex gap-14 links mt-5 '>
        {["Explore", "Genres", "Book Club", "New Arrivals", "Contact Us"].map((item, index) => (
          <a key={index} className={'font-light capitalize cursor-pointer text-lg ${index === 4 && "ml-82" : ""}'}>
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;



