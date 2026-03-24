export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50 mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <p className="text-sm font-semibold text-gray-800">
              NAVER 뉴로다이버시티 연구팀
            </p>
            <p className="text-xs text-gray-500 mt-1">
              신경다양성 인구를 위한 HCI 연구
            </p>
          </div>
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} NAVER Corp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
