import React, { useState, useRef, useEffect } from 'react'
import { ChevronDown, Check, Search } from 'lucide-react'

export default function CustomSelect({
  value,
  onChange,
  options = [],
  placeholder = 'Select option',
  searchable = false,
  searchPlaceholder = 'Search...',
  className = '',
  menuClassName = '',
  align = 'left',
  size = 'md',
  disabled = false,
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const containerRef = useRef(null)
  const searchInputRef = useRef(null)

  // Normalize options into { value, label, badge, icon, description }
  const normalizedOptions = options.map(opt => {
    if (typeof opt === 'string' || typeof opt === 'number') {
      return { value: opt, label: String(opt) }
    }
    return {
      value: opt.value,
      label: opt.label || String(opt.value),
      badge: opt.badge,
      icon: opt.icon,
      description: opt.description,
    }
  })

  // Find currently selected option
  const selectedOption = normalizedOptions.find(opt => String(opt.value) === String(value))

  // Filtered options if search is enabled
  const filteredOptions = searchQuery.trim()
    ? normalizedOptions.filter(opt =>
        opt.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        String(opt.value).toLowerCase().includes(searchQuery.toLowerCase())
      )
    : normalizedOptions

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleKeyDown)
      if (searchable && searchInputRef.current) {
        setTimeout(() => searchInputRef.current?.focus(), 50)
      }
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, searchable])

  const handleSelect = (val) => {
    onChange(val)
    setIsOpen(false)
    setSearchQuery('')
  }

  const isSmall = size === 'sm'

  return (
    <div className={`relative inline-block text-left ${isOpen ? 'z-50' : 'z-10'}`} ref={containerRef}>
      {/* Trigger Button */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => setIsOpen(prev => !prev)}
        className={`flex items-center justify-between gap-2.5 transition-all duration-200 select-none ${
          isSmall
            ? 'px-3 py-1.5 rounded-lg text-xs'
            : 'px-3.5 py-2.5 rounded-xl text-xs'
        } font-medium bg-zinc-100/90 dark:bg-white/[0.05] hover:bg-zinc-200/80 dark:hover:bg-white/[0.08] border border-zinc-200/90 dark:border-white/[0.09] text-zinc-800 dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#0f62fe]/40 ${
          isOpen ? 'ring-2 ring-[#0f62fe]/40 border-[#0f62fe]/60 dark:border-[#0f62fe]/60' : ''
        } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className}`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-2 truncate">
          {selectedOption?.icon && (
            <span className="shrink-0">{selectedOption.icon}</span>
          )}
          <span className="truncate">{selectedOption ? selectedOption.label : placeholder}</span>
          {selectedOption?.badge && (
            <span className="ml-1 text-[10px] px-1.5 py-0.2 rounded font-semibold bg-[#0f62fe]/10 text-[#0f62fe] dark:text-[#38bdf8] border border-[#0f62fe]/20 shrink-0">
              {selectedOption.badge}
            </span>
          )}
        </span>
        <ChevronDown
          size={isSmall ? 12 : 13}
          className={`shrink-0 text-zinc-400 transition-transform duration-200 ease-out ${
            isOpen ? 'rotate-180 text-[#0f62fe]' : ''
          }`}
        />
      </button>

      {/* Floating Dropdown Menu */}
      {isOpen && (
        <div
          role="listbox"
          className={`absolute z-50 mt-1.5 min-w-[160px] max-w-[280px] bg-white/95 dark:bg-[#121624]/95 backdrop-blur-xl border border-zinc-200/90 dark:border-white/[0.1] rounded-xl shadow-xl shadow-black/10 dark:shadow-black/50 p-1.5 transition-all animate-in fade-in-0 zoom-in-95 duration-150 ${
            align === 'right' ? 'right-0' : 'left-0'
          } ${menuClassName}`}
        >
          {/* Optional Search bar for large lists (like Topics) */}
          {searchable && (
            <div className="relative mb-1.5 px-1 pt-0.5">
              <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder={searchPlaceholder}
                className="w-full pl-7 pr-2.5 py-1.5 bg-zinc-100 dark:bg-white/[0.06] border border-zinc-200/80 dark:border-white/[0.08] rounded-lg text-xs text-zinc-800 dark:text-zinc-200 placeholder:text-zinc-400 focus:outline-none focus:border-[#0f62fe]"
              />
            </div>
          )}

          {/* Option Items List */}
          <div className="max-h-60 overflow-y-auto space-y-0.5 scrollbar-thin">
            {filteredOptions.length === 0 ? (
              <div className="px-3 py-2 text-xs text-zinc-400 text-center">
                No options found
              </div>
            ) : (
              filteredOptions.map((opt) => {
                const isSelected = String(opt.value) === String(value)
                return (
                  <button
                    key={String(opt.value)}
                    type="button"
                    onClick={() => handleSelect(opt.value)}
                    className={`w-full flex items-center justify-between gap-2 px-3 py-2 rounded-lg text-xs font-medium text-left transition-colors duration-150 cursor-pointer ${
                      isSelected
                        ? 'bg-[#0f62fe]/10 text-[#0f62fe] dark:text-[#38bdf8] font-semibold'
                        : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/[0.08] hover:text-zinc-900 dark:hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      {opt.icon && <span className="shrink-0">{opt.icon}</span>}
                      <div className="truncate">
                        <div className="truncate">{opt.label}</div>
                        {opt.description && (
                          <div className="text-[10px] text-zinc-400 dark:text-zinc-500 font-normal truncate">
                            {opt.description}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0 ml-2">
                      {opt.badge && (
                        <span className="text-[10px] px-1.5 py-0.2 rounded font-semibold bg-zinc-100 dark:bg-white/10 text-zinc-600 dark:text-zinc-400">
                          {opt.badge}
                        </span>
                      )}
                      {isSelected && (
                        <Check size={13} className="text-[#0f62fe] dark:text-[#38bdf8]" />
                      )}
                    </div>
                  </button>
                )
              })
            )}
          </div>
        </div>
      )}
    </div>
  )
}
