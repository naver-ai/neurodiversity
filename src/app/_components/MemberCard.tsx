import Image from "next/image";
import type { TeamMember } from "../_types";

interface MemberCardProps {
  member: TeamMember;
}

export function MemberCard({ member }: MemberCardProps) {
  return (
    <div className="flex items-center">
      {/* Circular photo */}
      <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
        <Image
          src={member.photo}
          alt={member.nameEn ?? member.name}
          fill
          className="object-cover"
          sizes="120px"
        />
      </div>

      {/* Info */}
      <div className="flex-1 ml-5">
        <div className="text-lg font-bold flex items-center gap-1">
          <span>{member.name}</span>
          {member.website && (
            <a
              href={member.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label={`${member.name} 웹사이트`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mb-0.5">
                <path fillRule="evenodd" d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z" clipRule="evenodd" />
              </svg>
            </a>
          )}
        </div>
        <div className="text-sm font-medium text-gray-700">{member.role}</div>
        <div className="text-sm font-medium text-gray-500">{member.affiliation}</div>
        {member.note && (
          <div className="text-xs font-medium italic text-purple-500 mt-0.5">
            {member.note}
          </div>
        )}
      </div>
    </div>
  );
}
