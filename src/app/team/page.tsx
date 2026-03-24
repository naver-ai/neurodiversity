import type { Metadata } from "next";
import { loadYAML } from "../_lib/utils";
import type { TeamMember } from "../_types";
import { MemberCard } from "../_components/MemberCard";
import { SectionTitle } from "../_components/SectionTitle";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "연구진 소개",
};

export default function TeamPage() {
  const members = loadYAML<TeamMember[]>("team.yml");
  const currentMembers = members.filter((m) => m.status === "current");
  const alumni = members.filter((m) => m.status === "alumni");
  const collaborators = members.filter((m) => m.status === "collaborator");

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <SectionTitle
        title="연구진 소개"
        subtitle="NAVER 신경다양성 연구팀을 소개합니다."
      />

      {/* Current members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {currentMembers.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>

      {/* Alumni */}
      {alumni.length > 0 && (
        <>
          <Separator className="my-10" />
          <h2 className="text-lg font-bold text-gray-700 mb-5">과거 멤버</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {alumni.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </>
      )}

      {/* Collaborators */}
      {collaborators.length > 0 && (
        <>
          <Separator className="my-10" />
          <h2 className="text-lg font-bold text-gray-700 mb-1">외부 협력</h2>
          <p className="text-sm text-gray-400 mb-5">1회 이상 연구 프로젝트에 함께 참여하신 분들</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {collaborators.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
