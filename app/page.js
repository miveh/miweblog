import { FirstCol } from "@/src/components/landing/FirstCol";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center">
      <div className="flex bg-red-800 w-3/4  items-center justify-center ">
        <div className="grid h-4/5  w-full grid-cols-3 grid-flow-col gap-4">
          <FirstCol />
          <div className="bg-white w-full h-full ">
            <div>part4</div>
          </div>
          <div className="bg-white w-full h-full ">
            <div>part5</div>
            <div>part2</div>
            <div>part6</div>
          </div>
        </div>
      </div>
    </main>
  );
}

{
  /* <svg
  width="38"
  height="34"
  viewBox="0 0 38 34"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M17.486 19.6667L16.831 18.9111L17.486 19.6667ZM2.8053 21.0108C3.0151 20.5 2.77102 19.9157 2.26013 19.7059C1.74925 19.4961 1.16502 19.7402 0.955222 20.2511L2.8053 21.0108ZM2.46076 16.1605C2.29231 16.6865 2.58213 17.2495 3.10809 17.4179C3.63406 17.5864 4.197 17.2965 4.36546 16.7706L2.46076 16.1605ZM5.51699 11.1157C5.56504 10.5656 5.15798 10.0806 4.60779 10.0325C4.0576 9.98449 3.57263 10.3916 3.52458 10.9417L5.51699 11.1157ZM3.7546 4.34358C3.75554 4.89587 4.20401 5.34282 4.75629 5.34188C5.30858 5.34095 5.75553 4.89247 5.7546 4.34019L3.7546 4.34358ZM12.3472 25.8526C12.7432 25.4676 12.752 24.8345 12.367 24.4385C11.982 24.0426 11.3489 24.0337 10.9529 24.4188L12.3472 25.8526ZM14.8283 20.7214C14.4238 21.0974 14.4007 21.7301 14.7766 22.1347C15.1526 22.5392 15.7854 22.5624 16.1899 22.1864L14.8283 20.7214ZM21.1566 17.3087C21.5258 16.8978 21.492 16.2656 21.0812 15.8965C20.6704 15.5273 20.0381 15.5611 19.669 15.9719L21.1566 17.3087ZM25.14 9.60547C24.7861 10.0295 24.8429 10.6601 25.2668 11.014C25.6908 11.3679 26.3214 11.3111 26.6754 10.8871L25.14 9.60547ZM18.47 32.9309C18.9932 32.754 19.2738 32.1864 19.0969 31.6632C18.9199 31.1401 18.3524 30.8594 17.8292 31.0364L18.47 32.9309ZM23.5582 29.585C23.0124 29.6697 22.6387 30.1808 22.7234 30.7266C22.8081 31.2723 23.3192 31.646 23.8649 31.5613L23.5582 29.585ZM29.1252 31.4372C29.6759 31.4795 30.1565 31.0673 30.1988 30.5166C30.241 29.966 29.8289 29.4853 29.2782 29.4431L29.1252 31.4372ZM34.6015 30.1468C34.0581 30.0478 33.5374 30.4081 33.4385 30.9514C33.3395 31.4948 33.6997 32.0155 34.2431 32.1144L34.6015 30.1468ZM1 22.6667C1.90647 23.0889 1.90648 23.0889 1.9065 23.0889C1.90651 23.0889 1.90653 23.0888 1.90654 23.0888C1.90657 23.0887 1.90661 23.0886 1.90665 23.0886C1.90673 23.0884 1.90684 23.0881 1.90697 23.0879C1.90723 23.0873 1.90758 23.0866 1.90802 23.0856C1.90889 23.0837 1.91013 23.0811 1.91172 23.0776C1.9149 23.0708 1.91948 23.0609 1.92541 23.048C1.93727 23.0222 1.95451 22.9846 1.97668 22.9358C2.021 22.8383 2.08501 22.6963 2.16492 22.5154C2.32468 22.1539 2.54827 21.6367 2.8053 21.0108L0.955222 20.2511C0.705858 20.8583 0.489316 21.3591 0.33555 21.7071C0.25869 21.881 0.197583 22.0166 0.155981 22.1082C0.135182 22.1539 0.119265 22.1886 0.108699 22.2116C0.103416 22.223 0.0994716 22.2316 0.0969244 22.2371C0.0956509 22.2398 0.0947266 22.2418 0.0941591 22.243C0.0938753 22.2437 0.0936807 22.2441 0.0935763 22.2443C0.093524 22.2444 0.0934943 22.2445 0.0934872 22.2445C0.0934837 22.2445 0.0934858 22.2445 0.0934936 22.2445C0.0934975 22.2445 0.0935076 22.2444 0.0935096 22.2444C0.0935211 22.2444 0.0935341 22.2444 1 22.6667ZM4.36546 16.7706C4.59591 16.0511 4.81264 15.3112 4.99764 14.578L3.05843 14.0887C2.88566 14.7734 2.6812 15.4723 2.46076 16.1605L4.36546 16.7706ZM4.99764 14.578C5.2418 13.6104 5.40542 12.3932 5.51699 11.1157L3.52458 10.9417C3.4164 12.1804 3.26392 13.2743 3.05843 14.0887L4.99764 14.578ZM5.7546 4.34019C5.75293 3.35978 5.73941 2.51743 5.72629 1.9197C5.71973 1.62076 5.71326 1.3828 5.70842 1.21912C5.706 1.13727 5.70398 1.07398 5.70256 1.03091C5.70185 1.00937 5.70129 0.992885 5.70091 0.981661C5.70071 0.976049 5.70056 0.971751 5.70046 0.968795C5.7004 0.967317 5.70036 0.966174 5.70034 0.96537C5.70032 0.964968 5.70031 0.96465 5.7003 0.964418C5.7003 0.964301 5.70029 0.964206 5.70029 0.964133C5.70029 0.964096 5.70029 0.964056 5.70029 0.964038C5.70029 0.964004 5.70029 0.963975 4.70093 1C3.70158 1.03602 3.70158 1.03601 3.70158 1.03599C3.70158 1.036 3.70158 1.03599 3.70158 1.036C3.70158 1.03601 3.70158 1.03604 3.70159 1.03609C3.70159 1.0362 3.7016 1.03639 3.70161 1.03667C3.70163 1.03722 3.70166 1.03811 3.7017 1.03934C3.70179 1.04179 3.70192 1.04557 3.7021 1.05067C3.70245 1.06086 3.70297 1.07629 3.70365 1.09675C3.705 1.13768 3.70694 1.19873 3.70929 1.27825C3.714 1.4373 3.72033 1.67016 3.72677 1.96359C3.73966 2.55061 3.75296 3.3792 3.7546 4.34358L5.7546 4.34019ZM9.74766 27C10.4515 27.7104 10.4515 27.7104 10.4515 27.7104C10.4515 27.7104 10.4515 27.7104 10.4515 27.7104C10.4515 27.7104 10.4515 27.7103 10.4516 27.7103C10.4517 27.7102 10.4518 27.7101 10.452 27.7099C10.4523 27.7095 10.4529 27.709 10.4536 27.7083C10.4551 27.7068 10.4573 27.7046 10.4603 27.7017C10.4662 27.6958 10.4751 27.687 10.4868 27.6754C10.5103 27.6522 10.5451 27.6178 10.5904 27.573C10.6811 27.4835 10.8137 27.3528 10.9812 27.1882C11.3161 26.8588 11.7904 26.3941 12.3472 25.8526L10.9529 24.4188C10.393 24.9632 9.91609 25.4306 9.57904 25.762C9.41049 25.9277 9.27689 26.0594 9.18533 26.1498C9.13955 26.195 9.10428 26.2298 9.0804 26.2534C9.06846 26.2653 9.05938 26.2742 9.05325 26.2803C9.05018 26.2833 9.04786 26.2856 9.04629 26.2872C9.0455 26.288 9.04491 26.2886 9.0445 26.289C9.0443 26.2892 9.04414 26.2893 9.04403 26.2894C9.04398 26.2895 9.04394 26.2895 9.04391 26.2896C9.04389 26.2896 9.04388 26.2896 9.04387 26.2896C9.04386 26.2896 9.04385 26.2896 9.74766 27ZM16.1899 22.1864C16.9044 21.5223 17.578 20.9103 18.141 20.4223L16.831 18.9111C16.2431 19.4207 15.5506 20.0501 14.8283 20.7214L16.1899 22.1864ZM18.141 20.4223C18.8781 19.7833 19.9693 18.6301 21.1566 17.3087L19.669 15.9719C18.4758 17.2999 17.4613 18.3646 16.831 18.9111L18.141 20.4223ZM26.6754 10.8871C27.4559 9.95196 28.1278 9.13846 28.6046 8.55864C28.8431 8.2687 29.0328 8.03713 29.163 7.87792C29.2281 7.79831 29.2783 7.73679 29.3123 7.6951C29.3293 7.67426 29.3423 7.65837 29.351 7.64766C29.3554 7.64231 29.3587 7.63825 29.3609 7.63551C29.362 7.63414 29.3629 7.6331 29.3634 7.6324C29.3637 7.63205 29.3639 7.63178 29.3641 7.63159C29.3642 7.6315 29.3642 7.63143 29.3643 7.63138C29.3643 7.63135 29.3643 7.63133 29.3643 7.63132C29.3643 7.6313 29.3643 7.63129 28.5888 7C27.8132 6.36871 27.8132 6.36871 27.8132 6.36872C27.8132 6.36872 27.8132 6.36873 27.8132 6.36875C27.8132 6.36878 27.8131 6.36884 27.8131 6.36891C27.813 6.36906 27.8128 6.3693 27.8125 6.36962C27.812 6.37025 27.8112 6.37122 27.8101 6.37252C27.808 6.37512 27.8048 6.37904 27.8006 6.38425C27.7921 6.39468 27.7794 6.41028 27.7626 6.43082C27.7291 6.47192 27.6793 6.53283 27.6148 6.6118C27.4856 6.76973 27.2971 6.9999 27.0599 7.28831C26.5855 7.86519 25.9168 8.67483 25.14 9.60547L26.6754 10.8871ZM15.4673 33C15.8703 33.9152 15.8702 33.9152 15.8702 33.9152C15.8702 33.9153 15.8701 33.9153 15.8701 33.9153C15.8701 33.9153 15.87 33.9153 15.87 33.9153C15.87 33.9153 15.87 33.9153 15.8701 33.9153C15.8703 33.9152 15.8708 33.915 15.8715 33.9147C15.873 33.914 15.8754 33.9129 15.8789 33.9114C15.8859 33.9084 15.8968 33.9037 15.9117 33.8973C15.9414 33.8845 15.9867 33.8651 16.0466 33.84C16.1663 33.7897 16.3441 33.7164 16.5718 33.6261C17.0276 33.4454 17.682 33.1975 18.47 32.9309L17.8292 31.0364C17.0036 31.3156 16.3168 31.5758 15.8348 31.7669C15.5937 31.8624 15.4035 31.9409 15.2724 31.9959C15.2069 32.0234 15.1561 32.0451 15.121 32.0602C15.1035 32.0677 15.09 32.0736 15.0805 32.0777C15.0757 32.0798 15.072 32.0814 15.0693 32.0826C15.0679 32.0832 15.0668 32.0837 15.066 32.084C15.0656 32.0842 15.0652 32.0844 15.065 32.0845C15.0648 32.0846 15.0647 32.0846 15.0646 32.0847C15.0645 32.0847 15.0645 32.0847 15.0644 32.0847C15.0644 32.0848 15.0643 32.0848 15.4673 33ZM23.8649 31.5613C24.7848 31.4185 25.6999 31.3333 26.5701 31.3333V29.3333C25.5738 29.3333 24.5535 29.4305 23.5582 29.585L23.8649 31.5613ZM26.5701 31.3333C27.4172 31.3333 28.2785 31.3723 29.1252 31.4372L29.2782 29.4431C28.3903 29.375 27.4771 29.3333 26.5701 29.3333V31.3333ZM34.2431 32.1144C35.0109 32.2543 35.6436 32.3859 36.0829 32.4822C36.3025 32.5303 36.4735 32.5695 36.5888 32.5966C36.6464 32.6101 36.6901 32.6205 36.7188 32.6274C36.7332 32.6309 36.7439 32.6335 36.7507 32.6352C36.7541 32.636 36.7566 32.6366 36.7581 32.637C36.7588 32.6371 36.7593 32.6373 36.7596 32.6373C36.7597 32.6374 36.7598 32.6374 36.7598 32.6374C36.7598 32.6374 36.7597 32.6374 36.7597 32.6374C36.7597 32.6374 36.7597 32.6374 36.7597 32.6374C36.7596 32.6373 36.7596 32.6373 37 31.6667C37.2404 30.696 37.2404 30.696 37.2403 30.696C37.2403 30.696 37.2402 30.696 37.2402 30.6959C37.2401 30.6959 37.24 30.6959 37.2399 30.6959C37.2396 30.6958 37.2393 30.6957 37.239 30.6956C37.2382 30.6955 37.2372 30.6952 37.236 30.6949C37.2336 30.6943 37.2301 30.6935 37.2257 30.6924C37.2169 30.6902 37.2042 30.6871 37.1878 30.6832C37.1549 30.6753 37.107 30.6638 37.0451 30.6493C36.9211 30.6202 36.7407 30.5788 36.5111 30.5285C36.0521 30.4279 35.3959 30.2915 34.6015 30.1468L34.2431 32.1144Z"
    fill="#15355A"
  />
</svg>; */
}
