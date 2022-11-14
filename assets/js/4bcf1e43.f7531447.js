"use strict";(self.webpackChunkdocusaurus_dashboard=self.webpackChunkdocusaurus_dashboard||[]).push([[734],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=l(n),h=r,m=c["".concat(p,".").concat(h)]||c[h]||u[h]||s;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},165:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const s={sidebar_position:3},o="Link test repositories to dashboard",i={unversionedId:"setup/dashboard-setup/link-test-repos-and-dashboard",id:"setup/dashboard-setup/link-test-repos-and-dashboard",title:"Link test repositories to dashboard",description:"Modify Playwright github actions in the test repositories to notify and update dashboard to the latest test results:",source:"@site/docs/setup/dashboard-setup/link-test-repos-and-dashboard.md",sourceDirName:"setup/dashboard-setup",slug:"/setup/dashboard-setup/link-test-repos-and-dashboard",permalink:"/cqa-dashboard-app/docs/setup/dashboard-setup/link-test-repos-and-dashboard",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Deploy website to Github pages",permalink:"/cqa-dashboard-app/docs/setup/dashboard-setup/deploy-website-to-github-pages"},next:{title:"Setup Multiple Workflows for Different Testing Purposes",permalink:"/cqa-dashboard-app/docs/category/setup-multiple-workflows-for-different-testing-purposes"}},p={},l=[],d={toc:l};function u(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"link-test-repositories-to-dashboard"},"Link test repositories to dashboard"),(0,r.kt)("p",null,"Modify Playwright github actions in the test repositories to notify and update dashboard to the latest test results:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a personal access token named ",(0,r.kt)("inlineCode",{parentName:"p"},"PAT_TOKEN")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"repo")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"workflow")," permissions"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"If the organization your dashboard is located in requires SSO enable SSO for the PAT token"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the GitHub settings of the test repository, add the personal access token ",(0,r.kt)("inlineCode",{parentName:"p"},"PAT_TOKEN")," to the test repository's actions secrets\n",(0,r.kt)("img",{alt:"Location of actions secrets",src:n(9393).Z,width:"2662",height:"1328"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Append the following steps to the ",(0,r.kt)("inlineCode",{parentName:"p"},"playwright-onDemand.yml")," file below the current steps in the ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," job."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'    - name: Get current date\n      id: date\n      run: echo "::set-output name=date::$(date +\'%Y-%m-%d\')"\n    - name: Upload HTML report as Artifact\n      uses: actions/upload-artifact@v2\n      if: always()\n      with: \n        name: onDemand\n        path: pw-report/\n\n  storeReports:\n    name: Store reports\n    if: ${{ always() }}\n    needs: test\n    runs-on: ubuntu-latest\n    steps:\n    - name: Download all workflow run artifacts\n      uses: actions/download-artifact@v3\n      id: download\n    - name: Publish to external repo\n      if: always()\n      uses: peaceiris/actions-gh-pages@v3.7.3\n      with:\n        external_repository: mspnp/intern-js-pipeline\n        publish_branch: gh-pages\n        personal_token: ${{ secrets.PAT_TOKEN }}\n        publish_dir: ${{steps.download.outputs.download-path}}\n        destination_dir: test-reports/${{ github.repository }}\n        keep_files: true\n        user_name: "github-actions[bot]"\n        user_email: "github-actions[bot]@users.noreply.github.com"\n\n  notify-dashboard:\n    name: Notify Dashboard\n    if: ${{ always() }}\n    needs: [test, storeReports]\n    # The type of runner that the job will run on\n    runs-on: ubuntu-latest\n\n    # Steps represent a sequence of tasks that will be executed as part of the job\n    steps:\n      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it\n      - uses: actions/checkout@v3\n\n      # Runs a single command using the runners shell\n      - name: Notify docusaurus repo\n        env:\n          GITHUB_TOKEN: ${{ secrets.PAT_TOKEN }}\n        run: |\n          gh api repos/mspnp/intern-js-pipeline/dispatches \\\n              --raw-field event_type=rebuild-site\n')),(0,r.kt)("p",{parentName:"li"},"  As a result the ",(0,r.kt)("inlineCode",{parentName:"p"},"playwright-onDemand.yml")," file should look similar to the following code with extra lines to install additional dependencies if required."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# This workflow will do a clean installation of node dependencies, cache/restore them, build the source code and run tests across different versions of node\n# For more information see: https://help.github.com/actions/language-and-framework-guides/using-nodejs-with-github-actions\n\nname: Playwright tests\n\non:\n  # Runs on push or pull requests and nightly\n  push:\n    branches: [ "main" ]\n  pull_request:\n    branches: [ "main" ]\n  schedule: \n    # nightly\n    - cron: \'0 0 * * *\'\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n\n    strategy:\n      matrix:\n        node-version: [14.x, 16.x, 18.x]\n        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/\n\n    steps:\n    - uses: actions/checkout@v3\n    - uses: actions/setup-node@v3\n    - name: Install dependencies\n      run: npm ci\n    - name: Install Playwright\n      run: npx playwright install --with-deps\n    - name: Build production build\n      run: npm run build\n    - name: Run your tests\n      run: npm run test\n    - name: Get current date\n      id: date\n      run: echo "::set-output name=date::$(date +\'%Y-%m-%d\')"\n    - name: Upload HTML report as Artifact\n      uses: actions/upload-artifact@v2\n      env:\n          TAG_NAME: test-report-${{ steps.date.outputs.date }}\n      if: always()\n      with: \n        name: onDemand\n        path: pw-report/\n\n  storeReports:\n    name: Store reports\n    if: ${{ always() }}\n    needs: test\n    runs-on: ubuntu-latest\n    steps:\n    - name: Download all workflow run artifacts\n      uses: actions/download-artifact@v3\n      id: download\n    - name: Publish to external repo\n      if: always()\n      uses: peaceiris/actions-gh-pages@v3.7.3\n      with:\n        external_repository: mspnp/intern-js-pipeline\n        publish_branch: gh-pages\n        personal_token: ${{ secrets.PAT_TOKEN }}\n        publish_dir: ${{steps.download.outputs.download-path}}\n        destination_dir: test-reports/${{ github.repository }}\n        keep_files: true\n        user_name: "github-actions[bot]"\n        user_email: "github-actions[bot]@users.noreply.github.com"\n\n  notify-dashboard:\n    name: Notify Dashboard\n    if: ${{ always() }}\n    needs: [test, storeReports]\n    # The type of runner that the job will run on\n    runs-on: ubuntu-latest\n\n    # Steps represent a sequence of tasks that will be executed as part of the job\n    steps:\n      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it\n      - uses: actions/checkout@v3\n\n      # Runs a single command using the runners shell\n      - name: Notify docusaurus repo\n        env:\n          GITHUB_TOKEN: ${{ secrets.PAT_TOKEN }}\n        run: |\n          gh api repos/mspnp/intern-js-pipeline/dispatches \\\n              --raw-field event_type=rebuild-site\n')),(0,r.kt)("p",{parentName:"li"},"  This allows the ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," job to store the Playwright artifact. ",(0,r.kt)("inlineCode",{parentName:"p"},"storeReports")," then pushes the Playwright artifact to a folder in the dashboard's ",(0,r.kt)("inlineCode",{parentName:"p"},"gh_pages"),". Lastly, ",(0,r.kt)("inlineCode",{parentName:"p"},"notify-dashboard")," sends a trigger to the dashboard notifying it to rebuild.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Change the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"external_repository")," under the ",(0,r.kt)("inlineCode",{parentName:"p"},"storeReports")," job from ",(0,r.kt)("inlineCode",{parentName:"p"},"mspnp/intern-js-pipeline")," to the dashboard's organization and repository name")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"notify-dashboard")," job, replace ",(0,r.kt)("inlineCode",{parentName:"p"},"mspnp/intern-js-pipeline")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"repos/mspnp/intern-js-pipeline/dispatches")," with the dashboard's organization and repository name")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Triggering the playwright Github action should now cause the dashboard's rebuild workflow to execute"))))}u.isMDXComponent=!0},9393:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/actions-secrets-de1f6e24f63fbc626ef9b8ee3862459f.png"}}]);