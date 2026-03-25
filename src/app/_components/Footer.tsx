import Image from "next/image";
import { assetPath } from "../_lib/asset-path";

export function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-24">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-8">
          <div>
            <Image
              src={assetPath("/assets/logos/ai_lab_logo_vertical_black.svg")}
              alt="NAVER AI Lab"
              width={200}
              height={200}
              className="h-10 w-auto opacity-50"
            />
            <p className="text-xs text-gray-400 mt-2">신경다양성 연구팀</p>
          </div>
          <p className="text-xs text-gray-300 self-end">
            © {new Date().getFullYear()} NAVER AI Lab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
