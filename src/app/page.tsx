import { ChapterHands } from "@/components/home/ChapterHands";
import { ChapterJoin } from "@/components/home/ChapterJoin";
import { ChapterMusic } from "@/components/home/ChapterMusic";
import { ChapterPatch } from "@/components/home/ChapterPatch";
import { ChapterPeople } from "@/components/home/ChapterPeople";
import { ChapterPieces } from "@/components/home/ChapterPieces";
import { ChapterStory } from "@/components/home/ChapterStory";
import { HeroBlind } from "@/components/home/HeroBlind";
import "./home.css";

/** The shirt: a hero blind, then seven stripes that open onto STRIPED's world. */
export default function Home() {
  return (
    <>
      <HeroBlind />
      <ChapterStory />
      <ChapterPieces />
      <ChapterHands />
      <ChapterPatch />
      <ChapterMusic />
      <ChapterPeople />
      <ChapterJoin />
    </>
  );
}
