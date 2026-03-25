import type { Metadata } from "next";
import { loadYAML } from "../_lib/utils";
import type { TeamMember } from "../_types";
import { MemberCard } from "../_components/MemberCard";
import { SectionHeader } from "../_components/SectionHeader";

export const metadata: Metadata = {
  title: "연구진 소개",
};

export default function TeamPage() {
  const members = loadYAML<TeamMember[]>("team.yml");
  const currentMembers = members.filter((m) => m.status === "current");
  const alumni = members.filter((m) => m.status === "alumni");
  const collaborators = members.filter((m) => m.status === "collaborator");

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Page header */}
      <div className="mb-16 flex items-baseline gap-4 flex-wrap">
        <h1 className="text-3xl font-bold text-gray-900 leading-tight tracking-tight">연구진 소개</h1>
        <p className="text-base text-gray-500">NAVER 신경다양성 연구팀을 소개합니다.</p>
      </div>

      {/* Current members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {currentMembers.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>

      {/* Alumni */}
      {alumni.length > 0 && (
        <div className="mt-16 pt-12 border-t border-gray-100">
          <SectionHeader className="mb-8">과거 멤버</SectionHeader>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {alumni.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      )}

      {/* Collaborators */}
      {collaborators.length > 0 && (
        <div className="mt-16 pt-12 border-t border-gray-100">
          <SectionHeader>외부 협력</SectionHeader>
          <p className="text-sm text-gray-400 mt-1 mb-8">1회 이상 연구 프로젝트에 함께 참여하신 분들</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {collaborators.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
