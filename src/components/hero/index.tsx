import React from "react"
import settings from "../../../config/settings.json"
import Image from "../Image"
import { ExpandedHeroTree } from "../../../lib/locales"
import useLocales from "../../hooks/useLocales"
import useHeroStatuses from "../../hooks/useHeroStatuses"
import bgBlueCurve from "../../../config/images/bg-blue-curve.svg"
import bgGradientCurve from "../../../config/images/bg-gradient-curve.svg"
import MintButton from "../pieces/MintButton"
import PlayButton from "../pieces/PlayButton"
import SingleMintButton from "../pieces/SingleMintButton"

const Hero: React.FC<{ heroTree: ExpandedHeroTree }> = ({ heroTree }) => {
  const { locale } = useLocales()
  const { saleStatus, userStatus } = useHeroStatuses()

  return (
    <div className="bg-slate-100 pb-40">
      <div
        style={{
          backgroundImage: `url(${bgGradientCurve})`,
          backgroundSize: "auto 40vh",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
        }}
      >
        <div
          style={{
            backgroundImage: `url(${bgBlueCurve})`,
            // backgroundSize: "120vw 120vh",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="backdrop-blur-[90px] pb-20">
            <div
              className="px-[1rem] sm:px-[8rem] flex flex-col lg:flex-row justify-center items-center mx-auto pt-[6.6rem] min-h-[100vh] text-center sm:text-start"
              style={{
                backgroundColor: "rgba(217, 217, 217, 0.01)",
              }}
            >
              <h1 className="lg:text-[54px] sm:text-[40px] text-[30px] leading-tight font-semibold text-white scale-y-105 lg:hidden text-center mt-[84px]">
                {locale?.title}
              </h1>
              <div className="space-y-8 lg:w-[60%] xl:w-[76%] mt-20 lg:block hidden">
                <h1 className="lg:text-[54px] text-[40px] leading-tight font-semibold text-white scale-y-105">
                  {locale?.title}
                </h1>
                <p className="text-[22px] text-white leading-tight tracking-wide">
                  {locale?.description}
                </p>
                <div className="flex">
                  <MintButton />
                  <PlayButton />
                </div>
              </div>
              <div className="relative">
                <Image
                  src={settings.femaleNft}
                  alt="nft-demo"
                  className="sm:h-[80vh] h-[70vh] sm:mt-20 mt-0"
                />
                <Image
                  src={settings.cycle}
                  alt="Cycle-Image"
                  className="h-[22px] w-[35.8px] absolute bottom-6 sm:bottom-4 left-20 sm:right-24"
                />
                <SingleMintButton className="bg-white p-2 w-max flex justify-between items-center space-x-4 mx-auto md:mx-0 px-5 absolute bottom-3 sm:-right-10 -right-2  " />
              </div>
              <div className="flex lg:hidden ">
                <MintButton />
                <PlayButton />
              </div>
            </div>
            <div className="sm:flex flex-row flex-wrap justify-center mt-20 hidden">
              <div className="text-center mx-10">
                <Image src={settings.icon1} alt="Icon1" />
                <p className="w-32 tracking-wider text-[#05A3FF] my-8">
                  {locale?.playAmberGame}
                </p>
              </div>
              <div className="text-center mx-10">
                <Image src={settings.icon2} alt="Icon1" />
                <p className="w-[9rem] tracking-wider text-[#05A3FF] my-8">
                  {locale?.getFullownership}
                </p>
              </div>
              <div className="text-center mx-10">
                <Image src={settings.icon3} alt="Icon1" />
                <p className="w-[13rem] tracking-wider text-[#05A3FF] my-8">
                  {locale?.receivingRareNFT}
                  <br />
                  {"· 300N - 1 NFT ( 1 " + locale?.year + ");"}
                  <br />
                  {"· 30N - 8 NFT ( 6 " + locale?.months + ");"}
                  <br />
                  {"· 5N - 80 tokens ( 1 " + locale?.month + "to NFT."}
                </p>
              </div>
              <div className="text-center mx-10">
                <Image src={settings.icon4} alt="Icon1" />
                <p className="w-[10rem] tracking-wider text-[#05A3FF] my-8">
                  {locale?.obtainStatus}
                </p>
              </div>
              <div className="text-center mx-10">
                <Image src={settings.icon5} alt="Icon1" />
                <p className="w-[12rem] tracking-wider text-[#05A3FF] my-8">
                  {locale?.becomeMember + " ( 1NFT = 1" + locale?.vote + ")"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[40%] md:w-[55%] mx-auto xl:w-[80%] bg-transparent">
        <div className="pt-12 flex justify-between text-center lg:text-start px-16">
          <div className="w-[100%] lg:w-[50%] space-y-4">
            <h1 className="text-3xl font-bold">{locale?.recentlyMinted}</h1>
            <div className="flex items-center justify-center lg:justify-start space-x-8">
              <button
                className="btn btn-sm bg-white btn-outline capitalize rounded-2xl text-xs gap-1 font-bold"
                style={{
                  border: "1px solid rgba(57, 19, 184, 0.2)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 17l-5-5m0 0l5-5m-5 5h12"
                  />
                </svg>
                {locale?.prevNFT}
              </button>
              <button
                className="btn btn-sm bg-white btn-outline capitalize rounded-2xl text-xs gap-1 font-bold visited:text-slate-50"
                style={{
                  border: "1px solid rgba(57, 19, 184, 0.2)",
                }}
              >
                {locale?.nextNFT}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="w-[50%] hidden lg:block">
            <p className="text-sm font-semibold text-[#05A3FF]">
              {locale.mintDescription}
            </p>
          </div>
        </div>

        <div className="mt-12 pb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-2">
          <div className="rounded-3xl bg-[#06A4FF] w-[174px] sm:w-[240px] h-[249px] sm:h-[341px] flex justify-center items-center relative">
            <Image
              src={settings.manNft}
              alt="nft-card"
              className="w-[100%] h-[100%]"
            />
            <div className="flex items-center flex-col absolute bg-black/40 w-full bottom-0 rounded-b-3xl h-[48%] backdrop-blur-lg text-white">
              <h5 className="text-xl font-semibold mt-5">DJ Smokeout</h5>
              <p className="text-[0.86em] my-2">Rarity: 335.5</p>
              <button
                className="btn btn-outline btn-sm bg-white gap-2 font-semibold capitalize rounded-full"
                style={{
                  border: "1px solid rgba(57, 19, 184, 0.2)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                Search
              </button>
            </div>
          </div>
          <div className="rounded-3xl bg-accent sm:w-[240px] h-[249px] sm:h-[341px]  flex justify-center items-center relative">
            <Image
              src={settings.manNft}
              alt="nft-card"
              className="w-[100%] h-[100%]"
            />
            <div className="flex items-center flex-col absolute bg-black/40 w-full bottom-0 rounded-b-3xl h-[48%] backdrop-blur-lg text-white">
              <h5 className="text-xl font-semibold mt-5">DJ Smokeout</h5>
              <p className="text-[0.86em] my-2">Rarity: 335.5</p>
              <button
                className="btn btn-outline btn-sm bg-white gap-2 font-semibold capitalize rounded-full"
                style={{
                  border: "1px solid rgba(57, 19, 184, 0.2)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                Search
              </button>
            </div>
          </div>
          <div
            className="rounded-3xl sm:w-[240px] h-[249px] sm:h-[341px] flex justify-center items-center relative"
            style={{
              background:
                "linear-gradient(224deg, rgb(110, 204, 255) 0%, rgb(255, 211, 202) 70%, rgba(255, 188, 221, 0) 100%)",
            }}
          >
            <Image
              src={settings.manNft}
              alt="nft-card"
              className="w-[100%] h-[100%]"
            />
            <div className="flex items-center flex-col absolute bg-black/40 w-full bottom-0 rounded-b-3xl h-[48%] backdrop-blur-lg text-white">
              <h5 className="text-xl font-semibold mt-5">DJ Smokeout</h5>
              <p className="text-[0.86em] my-2">Rarity: 335.5</p>
              <button
                className="btn btn-outline btn-sm bg-white gap-2 font-semibold capitalize rounded-full"
                style={{
                  border: "1px solid rgba(57, 19, 184, 0.2)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                Search
              </button>
            </div>
          </div>
          <div className="rounded-3xl bg-[#06A4FF] sm:w-[240px] h-[249px] sm:h-[341px] flex justify-center items-center relative">
            <Image
              src={settings.manNft}
              alt="nft-card"
              className="w-[100%] h-[100%]"
            />
            <div className="flex items-center flex-col absolute bg-black/40 w-full bottom-0 rounded-b-3xl h-[48%] backdrop-blur-lg text-white">
              <h5 className="text-xl font-semibold mt-5">DJ Smokeout</h5>
              <p className="text-[0.86em] my-2">Rarity: 335.5</p>
              <button
                className="btn btn-outline btn-sm bg-white gap-2 font-semibold capitalize rounded-full"
                style={{
                  border: "1px solid rgba(57, 19, 184, 0.2)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
