import React from "react"
import styled from "styled-components"
import settings from "../../../config/settings.json"
import Image from "../Image"
import { ExpandedHeroTree } from "../../../lib/locales"
import useLocales from "../../hooks/useLocales"
import useHeroStatuses from "../../hooks/useHeroStatuses"
import bgBlueCurve from "../../../config/images/bg-blue-curve.svg"
import bgGradientCurve from "../../../config/images/bg-gradient-curve.svg"
import bgGradientCurve2 from "../../../config/images/bg-gradient-curve-2.svg"
import bgBlueCurve2 from "../../../config/images/bg-blue-curve-2.svg"
import partnerBGCurve from "../../../config/images/partner-bg-red.svg"
import bgRedCurve from "../../../config/images/bg-red-curve.svg"
import bgRedEnd from "../../../config/images/bg-red-end.svg"
import bgBlueEndLeft from "../../../config/images/bg-blue-end-left.svg"
import MintButton from "../pieces/MintButton"
import PlayButton from "../pieces/PlayButton"
import SingleMintButton from "../pieces/SingleMintButton"
import Checkbox from "../pieces/Checkbox"
import Slider from "../pieces/Slider"
import { SocialIcon } from "react-social-icons"
import { useState } from "react"

const Hero: React.FC<{ heroTree: ExpandedHeroTree }> = ({ heroTree }) => {
  const { locale } = useLocales()
  const { saleStatus, userStatus } = useHeroStatuses()
  const [checked, setChecked] = useState(true)
  const handleCheckboxChange = eve => {
    setChecked(eve.target.checked)
  }
  return (
    <div className="bg-slate-100">
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
                  {"· 5N - 80 tokens ( 1 " + locale?.month + ") to NFT."}
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
      <section
        style={{
          backgroundImage: `url(${bgBlueCurve2}), url(${bgGradientCurve2}), url(${bgRedCurve}), url(${bgRedEnd}), url(${bgBlueEndLeft})`,
          backgroundSize:
            "auto 100vh, auto 350px, auto 100vh, contain, auto 300px",
          backgroundRepeat: "no-repeat",
          backgroundOrigin:
            "border-box, border-box, border-box, border-box, border-box",
          backgroundClip: "border-box",
          backgroundPosition:
            "right 100px, left 200px, 20vw 20%, center bottom, left bottom",
        }}
      >
        <div className="backdrop-blur-[80px]">
          <div className="mx-auto w-full sm:w-[80%] bg-transparent">
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
                  {locale?.mintDescription}
                </p>
              </div>
            </div>
            <Slider />
          </div>

          <div className="flex w-[80%] mx-auto justify-around items-start mt-40">
            <Image src={settings.appleiPhoneNFT} alt="Apple iPhone NFT" />
            <div className="bg-white rounded-[30px] shadow-lg w-[50%] p-8">
              <h1 className="text-[50px] font-bold ">{locale?.mint}</h1>
              <GradientText>{locale?.getNFTUnique}</GradientText>
              <p className="text-[#444]">{locale?.getNFTDesc}</p>
            </div>
          </div>

          <div className="flex w-[80%] mx-auto justify-around items-start mt-40">
            <div className="bg-white rounded-[30px] shadow-lg w-[45%] p-8">
              <h1 className="text-[50px] font-bold ">{locale?.play}</h1>
              <GradientText1>{locale?.participateGame}</GradientText1>
              <p className="text-[#444]">{locale?.gameDesc}</p>
            </div>
            <div className="w-[45%]">
              <Image src={settings.phoneGame1} alt="Apple iPhone NFT" />
              <Image src={settings.phoneGame2} alt="Apple iPhone NFT" />
            </div>
          </div>

          <div className="flex w-[80%] mx-auto justify-around items-center mt-40">
            <Image src={settings.fightModels} alt="Apple iPhone NFT" />
            <div className="bg-white rounded-[30px] shadow-lg w-[45%] p-8">
              <h1 className="text-[50px] font-bold ">{locale?.trade}</h1>
              <GradientText3>{locale?.tradeDesc}</GradientText3>
              <p className="text-[#444]">{locale?.tradeSmallDesc}</p>
            </div>
          </div>

          <div className="w-[80%] mx-auto mt-5">
            <div className="rounded-[30px] shadow-lg bg-white flex">
              <GradientBackground className="rounded-[30px] w-[30%]">
                <Image
                  src={settings.manNft}
                  alt="Man-NFT"
                  className="max-h-[575px]"
                />
                <div className="flex justify-center">
                  <Image
                    src={settings.cycle}
                    alt="Cycle"
                    className="w-5 pb-5"
                  />
                </div>
              </GradientBackground>
              <div className="px-5 py-8">
                <h1 className="text-[40px] font-bold w-[70%] leading-tight p-2">
                  {locale?.title}
                </h1>
                <div className="flex justify-around">
                  <div className="grid gap-4 p-2">
                    <label className="flex items-center">
                      <Checkbox
                        checked={checked}
                        className="flex items-center"
                        onChange={handleCheckboxChange}
                      />
                      <span className="ml-3 text-white bg-gradient-to-r from-[#83D3FF] to-[#11ABFF] px-5 py-1 rounded-2xl">
                        {locale?.rule1}
                      </span>
                    </label>
                    <label className="flex items-center">
                      <Checkbox
                        checked={checked}
                        className="flex items-center"
                        onChange={handleCheckboxChange}
                      />
                      <span className="ml-3 text-white bg-gradient-to-r from-[#83D3FF] to-[#11ABFF] px-5 py-1 rounded-2xl">
                        {locale?.rule2}
                      </span>
                    </label>
                    <label className="flex items-center">
                      <Checkbox
                        checked={checked}
                        className="flex items-center"
                        onChange={handleCheckboxChange}
                      />
                      <span className="ml-3 text-white bg-gradient-to-r from-[#83D3FF] to-[#11ABFF] px-5 py-1 rounded-2xl">
                        {locale?.rule3}
                        <br />
                        {"▹ 300N - 1 NFT ( 1 " + locale?.year + ");"}
                        <br />
                        {"▹ 30N - 8 NFT ( 6 " + locale?.month + ");"}
                        <br />
                        {"▹ 5N - 80 tokens ( 1 " + locale?.month + ") to NFT."}
                      </span>
                    </label>
                    <label className="flex items-center">
                      <Checkbox
                        checked={checked}
                        className="flex items-center"
                        onChange={handleCheckboxChange}
                      />
                      <span className="ml-3 text-white bg-gradient-to-r from-[#83D3FF] to-[#11ABFF] px-5 py-1 rounded-2xl">
                        {locale?.rule4}
                      </span>
                    </label>
                  </div>
                  <div className="grid gap-4 p-2">
                    <label className="flex items-center">
                      <Checkbox
                        checked={checked}
                        className="flex items-center"
                        onChange={handleCheckboxChange}
                      />
                      <span className="ml-3 text-white bg-gradient-to-r from-[#83D3FF] to-[#11ABFF] px-5 py-1 rounded-2xl">
                        {locale?.rule5}
                        <br />
                        {"(1 NFT = 1 " + locale?.vote + ")."}
                      </span>
                    </label>
                    <label className="flex items-center">
                      <Checkbox
                        checked={checked}
                        className="flex items-center"
                        onChange={handleCheckboxChange}
                      />
                      <span className="ml-3 text-white bg-gradient-to-r from-[#83D3FF] to-[#11ABFF] px-5 py-1 rounded-2xl">
                        {locale?.rule6}
                      </span>
                    </label>
                    <label className="flex items-center">
                      <Checkbox
                        checked={checked}
                        className="flex items-center"
                        onChange={handleCheckboxChange}
                      />
                      <span className="ml-3 text-white bg-gradient-to-r from-[#83D3FF] to-[#11ABFF] px-5 py-1 rounded-2xl">
                        {locale?.rule7}
                      </span>
                    </label>
                    <label className="flex items-center">
                      <Checkbox
                        checked={checked}
                        className="flex items-center"
                        onChange={handleCheckboxChange}
                      />
                      <span className="ml-3 text-white bg-gradient-to-r from-[#83D3FF] to-[#11ABFF] px-5 py-1 rounded-2xl">
                        {locale?.rule8}
                      </span>
                    </label>
                  </div>
                </div>
                <div className="flex justify-end mt-5">
                  <MintButton />
                  <PlayButton />
                </div>
              </div>
            </div>
          </div>

          <PartnersGradBack className="w-[70%] mx-auto mt-32">
            <h1 className="text-[#05A3FF] text-[50px] font-bold my-10">
              {locale?.partners}
            </h1>
            <Image
              src={settings.partners}
              alt="Partners"
              className="text-center"
            />
          </PartnersGradBack>

          <div className="text-center mt-32 pb-4">
            <div className="flex justify-center">
              <div className="mx-10">
                <h4 className="text-[#05A3FF] mb-5">{locale?.joinUs}</h4>
                <div>
                  <SocialIcon
                    url="https://twitter.com"
                    bgColor="transparent"
                    fgColor="white"
                  />
                  <SocialIcon url="https://discord.gg" />
                  <SocialIcon
                    url="https://instagram.com"
                    bgColor="transparent"
                    fgColor="white"
                  />
                </div>
              </div>
              <div className="w-[154px] mx-10">
                <Image
                  className="text-[#05A3FF]"
                  src={settings.logoBlue}
                  alt="Logo"
                />
              </div>
              <div className="mx-10">
                <h4 className="text-[#05A3FF] mb-3">{locale?.about}</h4>
                <div>
                  <h4 className="text-white">{locale?.whitepaper}</h4>
                  <h4 className="text-white">{locale?.tokenomics}</h4>
                </div>
              </div>
            </div>
            <div className="mt-20">
              <h4 className="text-[#05A3FF]">{locale?.copywrite}</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero

const GradientText = styled.h4`
  background-image: linear-gradient(
    to right,
    rgba(5, 163, 255, 1),
    rgba(255, 188, 201, 1)
  );
  font-size: 30px;
  line-height: 2rem;
  margin-bottom: 2rem;
  font-weight: 700;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
const GradientText1 = styled.h4`
  background-image: linear-gradient(
    to right,
    rgba(255, 212, 203, 1),
    rgba(255, 188, 221, 1)
  );
  font-size: 30px;
  line-height: 2rem;
  margin-bottom: 2rem;
  font-weight: 700;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const GradientText3 = styled.h4`
  background-image: linear-gradient(
    to right,
    rgba(42, 180, 255, 1),
    rgba(111, 204, 255, 1)
  );
  font-size: 30px;
  line-height: 2rem;
  margin-bottom: 2rem;
  font-weight: 700;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const GradientBackground = styled.div`
  background-image: linear-gradient(
    45deg,
    rgba(42, 180, 255, 1),
    rgba(111, 204, 255, 1)
  );
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const PartnersGradBack = styled.div`
  background-image: ${partnerBGCurve};
  background-size: contain;
`
