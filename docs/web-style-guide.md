# MAKE IT LAUNCH — Web Style Guide & System Instructions

> **Mục đích:** Tài liệu này là **System Instruction / Context Prompt** cho Cursor và mọi contributor khi phát triển landing page cùng thương hiệu **10X Masterminds / MAKE IT LAUNCH**. Mọi UI, component và convention code **phải khớp** với repository `make-it-launch` — không tự ý đổi DNA thị giác hoặc stack.

---

## 0. Tổng quan thương hiệu & phong cách UI

**Phong cách:** Premium webinar / mastermind landing — **luxury minimal + glassmorphism nhẹ**, nền **xanh thương hiệu đậm** kết hợp **vàng gold**, sparkle/orb ambient, shimmer CTA. Không cyberpunk, không neumorphism, không Bento grid phức tạp — chủ yếu **section dọc + card grid 1/3 cột**.

**Ngôn ngữ & locale:** `lang="vi"` trên `<html>`. Copy tiếng Việt; đoạn mô tả dài dùng class `.text-justify-vi`.

**Chế độ sáng/tối:** Dự án **không** có Dark/Light toggle. Thay vào đó dùng **hai “vùng” cố định:**
- **Vùng tối (brand):** mesh xanh animated, chữ trắng, viền `white/15`, gold accent (`Hero`, `LeadCapture`, `CtaBand` green variant, `Header`).
- **Vùng sáng:** `bg-white`, `bg-slate-50`, `bg-slate-100`, chữ `slate-900` / `slate-600`.

---

## 1. Design Tokens & Theme

### 1.1 Bảng màu (CSS variables — nguồn chân lý: `app/globals.css`)

| Token | Biến / giá trị | Vai trò |
|--------|----------------|---------|
| **Background (light)** | `--background: #ffffff` | Nền body, section sáng |
| **Foreground (text)** | `--foreground: #0f1a0e` | Chữ chính trên nền sáng |
| **Primary (brand green)** | `--color-brand-green: #1f3d1e` | Header, nút green, accent checklist |
| **Primary dark** | `--color-brand-green-dark: #0f1f0e` | Mesh gradient, overlay ảnh hero |
| **Accent (gold)** | `--color-brand-gold: #d4af37` | CTA primary, highlight headline, viền VIP |
| **Accent hover (gold)** | `#e8c547` | Hover nút primary (`Button`) |
| **Accent highlight** | `#fff3b0` | Gradient shimmer text/underline |
| **Secondary / danger** | `--color-brand-red: #c41e3a` | Pain points (`Problem` hover) |
| **Surface (form)** | `#f8fafc` | Input Kit / radio option |
| **Border (form)** | `#e2e8f0` | Input, card border nhạt |
| **Placeholder** | `#94a3b8` | Placeholder form |
| **Text on gold CTA** | `slate-950` / `#0f172a` | Chữ trên nút vàng |
| **Neutral (Tailwind slate)** | `slate-50` … `slate-900` | Section nền, body copy, FAQ |

**Gradient mesh (class `.bg-mesh-animated`):** `#0f1f0e` → `#1f3d1e` → `#2a5230` → `#0f1f0e`, `background-size: 200%`, animation `gradient-shift` 12s.

**Gradient nút gold (form submit / modal):** `#c9a227` → `#e7c376` → `#f5dfa0` (giữa) → quay lại gold.

**RGBA gold glow (dùng lặp lại):** `rgba(212, 175, 55, 0.25–0.55)` cho shadow, ring, pulse.

### 1.2 Typography

| Vai trò | Family | Weights | Ghi chú |
|---------|--------|---------|---------|
| **Sans / Body** | **Google Sans** (`next/font/google`, biến `--font-google-sans`) | 400, 500, 600, 700 | `display: swap`, subsets `latin` + `vietnamese` |
| **Heading** | Cùng Google Sans (`--font-heading` = `--font-sans`) | bold / extrabold / black tùy section | `h1–h3` trong `@layer base` dùng `font-heading` |
| **Nav** | `.font-nav` → Google Sans | medium 500 | `NavLinkLuxe` |
| **“Manrope” class** | `.font-manrope` | — | **Tên legacy** — vẫn map về `font-heading` (Google Sans), không dùng font Manrope |

**Kích thước tiêu chuẩn:**

| Element | Classes thực tế |
|---------|-----------------|
| **Hero H1** | `text-3xl md:text-5xl font-bold leading-tight tracking-tight text-white` |
| **Section H2** | `text-3xl sm:text-4xl font-bold tracking-tight text-slate-900` (dark section: `text-white`) |
| **Section subtitle** | `text-lg leading-relaxed text-slate-600` hoặc `text-white/85` |
| **Body** | `text-base md:text-lg leading-relaxed` |
| **Badge / label** | `text-[10px]`–`text-xs` `uppercase` `tracking-[0.12em]`–`tracking-wider` |
| **MAKE IT LAUNCH title** | Component `MakeItLaunchTitle`: `hero` / `header` / `section` + `.text-gold-shimmer` |

**Global:** `antialiased` trên `<html>`, `scroll-behavior: smooth` (tắt khi `prefers-reduced-motion: reduce`).

### 1.3 Spacing & Layout

| Pattern | Giá trị |
|---------|---------|
| **Container** | `container mx-auto` + `px-5 md:px-4` |
| **Section padding** | `py-16 md:py-24` (chuẩn); `CtaBand`: `py-14 md:py-16`; `Header`: `py-3 md:py-4` |
| **Section intro block** | `mx-auto mb-12 max-w-2xl space-y-4 text-center md:mb-16` |
| **Content width** | Intro `max-w-2xl`; FAQ `max-w-3xl`; split/grid lớn `max-w-5xl` |
| **Grid gap** | `gap-8` (cards); hero/lead `gap-12 lg:gap-16` |
| **Card grid** | `grid-cols-1 md:grid-cols-3` (Benefits, Pricing) |
| **Split layout** | `lg:grid-cols-2` hoặc `lg:grid-cols-[1.1fr_0.9fr]` (Hero) |
| **Scroll anchor offset** | `scroll-mt-24 md:scroll-mt-28`; JS `HEADER_OFFSET = 88` (`lib/scroll-to-section.ts`) |
| **Sticky header** | `sticky top-0 z-50` |

Không custom `max-width` container trong `tailwind.config` — dùng **Tailwind `container` mặc định**.

### 1.4 Border radius, shadow, motion

| Loại | Chuẩn |
|------|--------|
| **Button** | `rounded-xl`; CTA pill / submit: `rounded-full` (`9999px`) |
| **Card** | `rounded-2xl` |
| **Hero portrait** | `rounded-[2rem]` + `border-2 border-[var(--color-brand-gold)]/30` |
| **Input (CMS / Kit)** | `rounded-lg` (0.75rem) hoặc `rounded-xl` |
| **Badge** | `rounded-full` |
| **Shadow CTA gold** | `shadow-[0_8px_30px_rgba(212,175,55,0.35)]` hover `0_12px_40px` |
| **Card nhẹ** | `shadow-sm`; hover `shadow-lg` / gold glow `0_0_40px` |
| **Transition UI** | `transition-all duration-300` (button); card `duration-500` |
| **Easing Framer / CSS** | `cubic-bezier(0.22, 1, 0.36, 1)` — **ease “luxury”** chuẩn dự án |
| **Reveal** | opacity + translate ~28px, duration `0.65s`, viewport `amount: 0.15` |
| **Stagger** | `stagger: 0.08`, item `duration: 0.55` |

**Animation classes (globals.css):** `marquee-scroll` 42s; `orb-float-a/b/c` 9–13s; `btn-shimmer` 3.2s (hover 1.4s); `glow-pulse` 2.4s; `gold-text-shimmer` 4s; `float-badge` 3.5s.

**Accessibility motion:** Luôn gọi `useReducedMotion()` (Framer) và tôn trọng `@media (prefers-reduced-motion: reduce)` trong CSS.

---

## 2. Component & UI Rules

### 2.1 Quy tắc UX đặc trưng

1. **Hierarchy rõ:** Section title center → subtitle → grid nội dung; CTA đăng ký luôn trỏ `#dang-ky` (`CTA_REGISTER_HREF`).
2. **Trust & urgency:** Hero có trust bullets (icon ✓ trong vòng gold), `urgencyText`, `HeroEventInfoBar` (glass bar 3 cột).
3. **Marquee social proof:** Band vàng full-width, chữ xanh đậm, animation infinite.
4. **Section dividers:** `.section-glow-line` — đường 1px gradient gold giữa các block.
5. **Highlight pricing tier:** `ShineCard` + `ring-2 ring-gold`, VIP `md:-translate-y-2`.
6. **CMS inline edit:** Khi `isEditing`, mọi copy qua `InlineField`; lưu per-section `SectionSaveBar`.

### 2.2 Component cốt lõi

#### Buttons (`components/ui/button.tsx`)

- Base: `inline-flex`, `rounded-xl`, `font-semibold`, `transition-all duration-300`, `hover:scale-[1.02]`, `active:scale-[0.98]`.
- **primary:** gold + `.btn-shimmer` + shadow gold.
- **secondary:** `border-white/30 bg-white/10 backdrop-blur` (trên nền tối).
- **ghost:** `text-white/90 hover:bg-white/10`.
- **outline-light:** viền trắng mờ, hover gold text.
- **green:** `bg-[var(--color-brand-green)]` hover `#2a5230`.
- **Sizes:** sm `px-4 py-2 text-sm` | md `px-6 py-3 text-base` | lg `px-8 py-4 text-lg`.
- **RegisterCtaButton:** bọc `Button`, `scrollToRegisterSection()`.
- **SectionScrollButton:** `scrollToHash(href)` với offset header.

#### Cards (`ShineCard`)

- `rounded-2xl`, hover sweep `.shine-card-sweep`, optional `glow` → gold shadow.
- Benefits: `border-slate-100 bg-slate-50 p-6`, hover `-translate-y-2` + gold border.
- Pricing: header đen, VIP header `border-b-2 border-gold`.

#### Inputs

- **CMS:** `InlineField` — border dashed slate, focus `border-[var(--color-brand-gold)]`.
- **Lead (Kit):** styles trong `.kit-form-wrapper` (globals.css) — đồng bộ gold focus ring `0 0 0 3px rgba(212,175,55,0.25)`.

#### Modals (`LeadSuccessModal`)

- Portal `createPortal` → `document.body`, `z-[100]`.
- Overlay `bg-slate-900/60 backdrop-blur-sm`.
- Panel `max-w-md rounded-2xl`, nút đóng gradient gold full-width.
- `Escape` đóng; lock `body overflow` khi mở.

#### Navbar (`Header`)

- `bg-[var(--color-brand-green)]/95 backdrop-blur-md`, border gold `/15`.
- Logo `BRAND_LOGO_SRC` = `/10x-logo.png`.
- Nav desktop: `.nav-pill-track` + `NavLinkLuxe`.
- CTA header: `RegisterCtaButton` size `sm`.

#### Footer

- `bg-black border-t border-white/10`, copyright + link Facebook `border-white/20`.

#### Ambient decoration

- `AmbientOrbs` variants `hero` | `cta` | `dark` — blur orbs + `.sparkle-field`.
- Hero thêm radial gold góc phải.

### 2.3 Responsive breakpoints

| Breakpoint | Tailwind | Cách dùng trong dự án |
|------------|----------|------------------------|
| **Mobile** | default `<640px` | `px-5`, stack CTA `w-full`, nav ẩn (chỉ logo + CTA) |
| **sm** | `640px+` | Typography badge, footer text |
| **md** | `768px+` | `md:px-4`, `md:grid-cols-3`, nav hiện, `md:flex-row` CTA |
| **lg** | `1024px+` | Split 2 cột hero/coach, brand text header |
| **Custom** | `min-width: 420px` | Grid 3 cột radio tier trong form Kit |

**Mobile-first:** Luôn viết class base cho mobile, mở rộng `sm:` / `md:` / `lg:`.

---

## 3. Tech Stack & Code Conventions

### 3.1 Stack

| Layer | Công nghệ |
|-------|-----------|
| Framework | **Next.js 16** (App Router), **React 19** |
| Styling | **Tailwind CSS v4** — `@import "tailwindcss"` trong `app/globals.css`, `@theme inline` (không file `tailwind.config.js` riêng) |
| CSS pipeline | `@tailwindcss/turbopack` trong `next.config.ts` |
| Animation | **framer-motion** (`Reveal`, `Stagger`, Hero motion) |
| Class merge | `clsx` + `tailwind-merge` → `cn()` tại `lib/utils/cn.ts` |
| Backend / CMS | **Supabase** (content, auth admin, upload ảnh) |
| Lint | `eslint-config-next` (core-web-vitals + typescript) |
| TypeScript | `strict: true`, path alias `@/*` → project root |

**Không dùng:** Shadcn UI, Styled Components, CSS Modules cho UI chính, MUI, Chakra.

### 3.2 Cấu trúc thư mục

```
app/                    # Routes, layout, globals.css, API routes
components/
  landing/              # Section theo trang (default export *Section)
  ui/                   # Primitive tái sử dụng (named export)
  admin/                # CMS admin UI
lib/
  content/              # defaults, fetch-content
  auth/, supabase/      # session, client/server
  utils/                # cn, format-text
  constants.ts          # logo, anchor CTA
  scroll-to-*.ts        # scroll behavior
types/content.ts        # Section content interfaces + SectionId
```

### 3.3 Naming conventions

| Loại | Quy tắc | Ví dụ |
|------|---------|--------|
| Landing section file | PascalCase, default export `*Section` | `Benefits.tsx` → `BenefitsSection` |
| UI primitive | kebab-case file, named export PascalCase | `shine-card.tsx` → `ShineCard` |
| Hooks / lib | camelCase | `scrollToHash`, `sentenceCase` |
| Section IDs (anchor) | kebab tiếng Việt không dấu | `#dang-ky`, `#loi-ich`, `#goi-hoc`, `#faq`, `#lo-trinh` |
| Content types | `*Content` trong `types/content.ts` | `HeroContent`, `AllPageContent` |
| CMS section keys | camelCase | `socialProof`, `ctaBand` |

### 3.4 Patterns tái sử dụng

**Section CMS pattern (bắt buộc cho landing có chỉnh sửa):**

```tsx
"use client";
// useState(initialContent), handleSave → onSave, SectionSaveBar khi isEditing
```

**Composition landing:** `LandingPageShell` ghép sections + `Reveal` bọc một số block + `SectionDivider` giữa hero flow.

**Styling:** Ưu tiên Tailwind utility + CSS variables brand; class tái sử dụng đặt trong `globals.css` (shimmer, mesh, nav luxe, kit form).

**Images:** `next/image` với `sizes` phù hợp; remote Supabase trong `next.config.ts` `images.remotePatterns`.

**Text:** CTA header dùng `sentenceCase()` (`vi-VN`) khi hiển thị.

---

## 4. Strict Rules — Dos & Don'ts

### ✅ BẮT BUỘC (Dos)

1. **Màu thương hiệu** chỉ qua `var(--color-brand-*)`, `--background`, `--foreground` hoặc bảng slate/white-opacity đã dùng trong repo — không thay palette green/gold/red.
2. **Font:** Chỉ **Google Sans** qua `app/layout.tsx` — không thêm Google Font / web font mới.
3. **Class Tailwind:** Gộp class bằng `cn(...)` khi có điều kiện hoặc override.
4. **Motion:** `useReducedMotion()` cho Framer; không animation gây chóng mặt trên CTA quan trọng ngoài pattern shimmer/glow đã có.
5. **Tiếng Việt:** Section copy dài dùng `.text-justify-vi`; `lang="vi"` giữ trên root layout.
6. **CTA đăng ký:** Dùng `RegisterCtaButton` hoặc anchor `#dang-ky` / `CTA_REGISTER_HREF`.
7. **Sticky scroll:** Hash navigation dùng `scrollToHash` (offset 88px), không tự scroll thô bỏ offset.
8. **Client boundary:** Component có state, form, motion → `"use client"` ở đầu file.
9. **Import path:** `@/components/...`, `@/lib/...` — không relative sâu vượt convention hiện có.
10. **A11y cơ bản:** `aria-label` nav, `aria-expanded` FAQ, modal `role="dialog"` + `aria-modal`.

### ❌ CẤM / TRÁNH (Don'ts)

1. **Không** thêm Dark/Light mode toggle — dự án không thiết kế theme switching.
2. **Không** inline `style={{}}` cho layout/visual (trừ trường hợp bắt buộc như lock scroll body trong modal).
3. **Không** dùng CSS-in-JS hoặc file `.module.css` cho component mới nếu không có lý do đặc biệt.
4. **Không** đổi `btn-shimmer`, `bg-mesh-animated`, `text-gold-shimmer` thành hiệu ứng khác hẳn (neon, flat Material, v.v.).
5. **Không** thay `container` / padding section (`px-5 md:px-4`, `py-16 md:py-24`) bằng spacing arbitrary lệch hệ thống.
6. **Không** hardcode màu gold/green ngoài token — nếu cần hex mới, thêm biến `:root` trước.
7. **Không** bỏ `prefers-reduced-motion` khi thêm animation CSS/JS.
8. **Không** tạo button/CTA one-off bỏ qua `Button` variants khi đã map được (primary/secondary/outline-light/green).
9. **Không** commit `.env.local` hoặc secret Supabase.

---

## 5. Checklist nhanh cho Cursor (dự án mới cùng brand)

Khi tạo section hoặc page mới, xác nhận:

- [ ] Nền section đúng “vùng” (trắng/slate vs mesh xanh vs đen).
- [ ] H2 + subtitle khớp pattern `max-w-2xl` center.
- [ ] Grid `gap-8`, `md:grid-cols-3` nếu là feature cards.
- [ ] CTA primary gold + shimmer; secondary outline-light trên nền tối.
- [ ] `id` section + `scroll-mt-24 md:scroll-mt-28` nếu có anchor.
- [ ] Orbs/sparkle chỉ trên section brand tối (không lạm dụng trên nền trắng).
- [ ] Content type + `SectionId` nếu tích hợp CMS Supabase.
- [ ] `Reveal` / `Stagger` cho entry animation nhất quán.

---

## 6. Tham chiếu file then chốt

| File | Nội dung |
|------|----------|
| `app/globals.css` | Tokens, animations, Kit form, nav luxe |
| `app/layout.tsx` | Google Sans, metadata, body classes |
| `components/ui/button.tsx` | Button variants & sizes |
| `components/ui/reveal.tsx` | Motion chuẩn section |
| `components/ui/shine-card.tsx` | Card hover luxury |
| `lib/constants.ts` | Logo, anchor CTA |
| `lib/scroll-to-section.ts` | Header offset scroll |
| `types/content.ts` | Schema nội dung CMS |

---

*Phiên bản trích xuất từ repository `make-it-launch` — đồng bộ với codebase hiện tại (Next 16, Tailwind 4, MAKE IT LAUNCH landing).*
