"use strict";(self.webpackChunkdocusaurus_dashboard=self.webpackChunkdocusaurus_dashboard||[]).push([[841],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),l=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=l(r),m=n,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||a;return r?o.createElement(d,s(s({ref:t},c),{},{components:r})):o.createElement(d,s({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2261:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:1},s="Modify Current Workflow File to Create Issues",i={unversionedId:"setup/automatic-issue-creation/create-issue-workflow",id:"setup/automatic-issue-creation/create-issue-workflow",title:"Modify Current Workflow File to Create Issues",description:"Add a job into the current workflow to automatically create issues upon test failure:",source:"@site/docs/setup/automatic-issue-creation/create-issue-workflow.md",sourceDirName:"setup/automatic-issue-creation",slug:"/setup/automatic-issue-creation/create-issue-workflow",permalink:"/cqa-dashboard-app/docs/setup/automatic-issue-creation/create-issue-workflow",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Enable Automatic Issue Creation",permalink:"/cqa-dashboard-app/docs/category/enable-automatic-issue-creation"},next:{title:"Setup Multiple Workflows for Different Testing Purposes",permalink:"/cqa-dashboard-app/docs/category/setup-multiple-workflows-for-different-testing-purposes"}},u={},l=[],c={toc:l};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"modify-current-workflow-file-to-create-issues"},"Modify Current Workflow File to Create Issues"),(0,n.kt)("p",null,"Add a job into the current workflow to automatically create issues upon test failure:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Ensure that issues are enabled for the test repository")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the GitHub settings of the test repository or its organization, add the Azure function key ",(0,n.kt)("inlineCode",{parentName:"p"},"FUNCTION_KEY")," to its actions secrets. If you are a Microsoft employee who does not have access to the function key of the Azure function that automatically creates issues/PRs you will need to reach out to _",(0,n.kt)("strong",{parentName:"p"},"_ for the function. If you are not a Microsoft employee or are unable to obtain the function you will need to set up the function app by yourself. You may do so by following the instructions at____"),". If you do choose to create your own function app remember to update the url in the job below.\n",(0,n.kt)("img",{alt:"Location of actions secrets",src:r(9908).Z,width:"2366",height:"1642"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Copy the following job into the ",(0,n.kt)("inlineCode",{parentName:"p"},"./github/workflows/playwright-onDemand.yml")," file right below the job ",(0,n.kt)("inlineCode",{parentName:"p"},"test"),"."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'  reportIssues:\n    name: Report issues\n    if: ${{ failure() }}\n    needs: test\n    runs-on: ubuntu-latest\n    steps:\n    - name: Set http web request parameters\n      uses: fjogeleit/http-request-action@v1\n      with:\n        url: \'https://createprpremium.azurewebsites.net/api/CreateIssue?code=${{ secrets.FUNCTION_KEY }}\'\n        method: \'POST\'\n        timeout: 15000\n        customHeaders: \'{"Content-Type": "application/json"}\'\n        data: \'{\n                "IssueComment": "Playwright tests are failing for this repository",\n                "Owner" : "${{github.repository_owner}}",\n                "Repo": "${{ github.event.repository.name }}",\n                "Token": "${{ secrets.DASHBOARD_REPORT_PAT }}",\n                "ToolLabel" : "Nightly Integration Tests" }\'\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The step above creates an issue in the current test repository stating that Playwright tests have failed. If you would like to change the repository the issue is created in or the message edit the parameters ",(0,n.kt)("inlineCode",{parentName:"p"},"Owner")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Repo")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"IssueComent")))))}p.isMDXComponent=!0},9908:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/actions-secrets-dc7bc6ab4d3485c5ae8943242db06b61.png"}}]);