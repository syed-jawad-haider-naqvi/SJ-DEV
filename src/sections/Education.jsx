import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

// --- PLACEHOLDERS: replace these with your real assets/links ---
const degreeImgPath = "/images/21L-7509.jpg"; // put your bachelors degree image in public/images and update this path
const degreeVerifyUrl = "https://nu.edu.pk/verification?id=21L-7509"; // replace with your verify URL

const cvImagePath = "/images/jawad.JPG"; // replace with your profile image (used for download)
const cvDriveLink = "https://drive.google.com/file/d/1Dy-ZPGh1lZW3qL_UiX3R_c2AAEDXRipj/view?usp=drivesdk"; // replace with your Drive link to the CV
const cvDownloadFilename = "Jawad_CV.jpg"; // filename suggested when downloading the profile image
// --------------------------------------------------------------

const Education = () => {
	return (
		<section
			id="education"
			className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
		>
			<div className="w-full h-full md:px-20 px-5">
				<TitleHeader title="Education" sub="🎓 Academic Background" />

				<div className="mt-16 grid md:grid-cols-2 grid-cols-1 gap-8">
					{/* Degree card - clicking the card opens the verify URL in a new tab */}
					<a
						href={degreeVerifyUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="no-underline"
					>
						<GlowCard
							card={{
								review:
									"",
                                no_stars: true,
							}}
						>
							<div
								className="w-full overflow-hidden rounded-xl flex items-center justify-center"
							>
								<img
									src={degreeImgPath}
									alt="Bachelor's Degree"
									className="w-full h-auto"
								/>
							</div>

							<div className="mt-4">
								<h2 className="text-2xl font-semibold">BS Computer Science</h2>
								<p className="text-white-50 mt-2">FAST NUCES Lahore | 2021 - 2025</p>
								<p className="mt-3 text-[#839CB5]">Click to Verify.</p>
							</div>
						</GlowCard>
					</a>

					{/* CV card - image download + link to Drive CV */}
                    <a 
                        href={cvDriveLink}
                        target="_blank"
						rel="noopener noreferrer"
						className="no-underline"
                        download={cvDownloadFilename}
                    >
					<GlowCard
						card={{
							review:
								"",
                            no_stars: true,
						}}
					>
						<div
							className="w-full overflow-hidden rounded-xl flex items-center justify-center"
						>
							{/* Download the provided profile image when clicked (works best with same-origin files placed in /public) */}

                            <img
                                src={cvImagePath}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        
						</div>

						<div className="mt-4">
							<h2 className="text-2xl font-semibold">Exceptional Visuals, Precision in Design</h2>
                            <br />
							<p className="text-white-50 mt-2">Proactive Computer Science graduate experienced in full-stack development, system design, and AI solutions. Skilled at solving challenges, adapting to new technologies, and building scalable, real-world applications.</p>
                            
							<div className="mt-3">
									Click to View CV.
							</div>
						</div>
					</GlowCard>
                    </a>
				</div>
			</div>
		</section>
	);
};

export default Education;
