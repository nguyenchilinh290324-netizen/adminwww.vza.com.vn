'use client'

import { useRouter } from 'next/navigation'

type LanguageToggleProps = {
  isVietnamese: boolean
}

export function LanguageToggle({ isVietnamese }: LanguageToggleProps) {
  const router = useRouter()

  function selectLanguage(language: 'vi' | 'en') {
    document.cookie = `site_language=${language}; Path=/; Max-Age=31536000; SameSite=Lax`
    router.refresh()
  }

  return (
    <div aria-label="Chọn ngôn ngữ / Select language" className="flex items-center rounded-md border border-slate-200 bg-white p-1 text-[10px] font-bold">
      <button
        type="button"
        aria-pressed={isVietnamese}
        onClick={() => selectLanguage('vi')}
        className={`rounded px-2 py-1.5 transition ${isVietnamese ? 'bg-[#193b59] text-white' : 'text-slate-500 hover:text-[#193b59]'}`}
      >
        VI
      </button>
      <button
        type="button"
        aria-pressed={!isVietnamese}
        onClick={() => selectLanguage('en')}
        className={`rounded px-2 py-1.5 transition ${!isVietnamese ? 'bg-[#193b59] text-white' : 'text-slate-500 hover:text-[#193b59]'}`}
      >
        EN
      </button>
    </div>
  )
}
