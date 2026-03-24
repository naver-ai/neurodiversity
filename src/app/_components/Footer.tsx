import Image from "next/image";
import { assetPath } from "../_lib/asset-path";

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50 mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="gap-1.5">
            <Image
              src={assetPath("/assets/logos/ai_lab_logo_vertical_black.svg")}
              alt="NAVER AI Lab"
              width={200}
              height={200}
              className="h-12 w-auto opacity-60"
            />
            <p className="text-xs text-gray-500 mt-2">
              신경다양성 연구팀
            </p>
          </div>
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} NAVER AI Lab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
