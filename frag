<mxfile host="app.diagrams.net" modified="2022-06-16T14:46:50.451Z" agent="5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36" etag="UkvkD40B29BskSaBPzWB" version="20.0.1" type="github">
  <diagram id="wiMfhkj_ppZTtVRItT9S" name="Page-1">
    <mxGraphModel dx="1410" dy="798" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0">
      <root>
        <mxCell id="0" />
        <mxCell id="1" parent="0" />
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-29" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;startArrow=none;startFill=0;endArrow=diamondThin;endFill=1;strokeWidth=1;endSize=12;" edge="1" parent="1" source="wuzGIZhDRvVzlFsrCuIW-13" target="wuzGIZhDRvVzlFsrCuIW-9">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-62" value="0...*" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" vertex="1" connectable="0" parent="wuzGIZhDRvVzlFsrCuIW-29">
          <mxGeometry x="-0.6907" y="1" relative="1" as="geometry">
            <mxPoint x="-1" as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-9" value="GLTFModel" style="swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=26;fillColor=none;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;" vertex="1" parent="1">
          <mxGeometry x="340" y="150" width="220" height="104" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-10" value="- mTextures: map&lt;string, Texture&gt;" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" vertex="1" parent="wuzGIZhDRvVzlFsrCuIW-9">
          <mxGeometry y="26" width="220" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-11" value="- mNodes: vector&lt;Node&gt;" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" vertex="1" parent="wuzGIZhDRvVzlFsrCuIW-9">
          <mxGeometry y="52" width="220" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-12" value="- mJoints: vector&lt;Joint&gt;" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" vertex="1" parent="wuzGIZhDRvVzlFsrCuIW-9">
          <mxGeometry y="78" width="220" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-13" value="Node" style="swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=26;fillColor=none;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;" vertex="1" parent="1">
          <mxGeometry x="650" width="180" height="182" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-14" value="+ mIdx: int" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" vertex="1" parent="wuzGIZhDRvVzlFsrCuIW-13">
          <mxGeometry y="26" width="180" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-15" value="+ mParentIdx: int" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" vertex="1" parent="wuzGIZhDRvVzlFsrCuIW-13">
          <mxGeometry y="52" width="180" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-16" value="+ mName: string" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" vertex="1" parent="wuzGIZhDRvVzlFsrCuIW-13">
          <mxGeometry y="78" width="180" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-70" value="+ mChildren: vector&lt;int&gt;" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" vertex="1" parent="wuzGIZhDRvVzlFsrCuIW-13">
          <mxGeometry y="104" width="180" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-71" value="+ mLocalTransform: m44" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" vertex="1" parent="wuzGIZhDRvVzlFsrCuIW-13">
          <mxGeometry y="130" width="180" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-72" value="+ mGlobalTransform: m44" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" vertex="1" parent="wuzGIZhDRvVzlFsrCuIW-13">
          <mxGeometry y="156" width="180" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-30" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;startArrow=none;startFill=0;endArrow=diamondThin;endFill=1;endSize=12;strokeWidth=1;" edge="1" parent="1" source="wuzGIZhDRvVzlFsrCuIW-17" target="wuzGIZhDRvVzlFsrCuIW-9">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-60" value="1...1" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" vertex="1" connectable="0" parent="wuzGIZhDRvVzlFsrCuIW-30">
          <mxGeometry x="0.6263" y="2" relative="1" as="geometry">
            <mxPoint as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-61" value="0...*" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" vertex="1" connectable="0" parent="wuzGIZhDRvVzlFsrCuIW-30">
          <mxGeometry x="-0.6317" y="-1" relative="1" as="geometry">
            <mxPoint x="-1" as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-17" value="Joint" style="swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=26;fillColor=none;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;" vertex="1" parent="1">
          <mxGeometry x="650" y="240" width="200" height="156" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-18" value="+ mIdx: int" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" vertex="1" parent="wuzGIZhDRvVzlFsrCuIW-17">
          <mxGeometry y="26" width="200" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-19" value="+ mParentIdx: int" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" vertex="1" parent="wuzGIZhDRvVzlFsrCuIW-17">
          <mxGeometry y="52" width="200" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-20" value="+ mName: string" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" vertex="1" parent="wuzGIZhDRvVzlFsrCuIW-17">
          <mxGeometry y="78" width="200" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-73" value="+ mLocalTransform: m44" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" vertex="1" parent="wuzGIZhDRvVzlFsrCuIW-17">
          <mxGeometry y="104" width="200" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-74" value="+ mInverseBindTransform: m44" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" vertex="1" parent="wuzGIZhDRvVzlFsrCuIW-17">
          <mxGeometry y="130" width="200" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-33" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;startArrow=none;startFill=0;endArrow=diamondThin;endFill=1;endSize=12;strokeWidth=1;" edge="1" parent="1" source="wuzGIZhDRvVzlFsrCuIW-21" target="wuzGIZhDRvVzlFsrCuIW-9">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-58" value="1...1" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" vertex="1" connectable="0" parent="wuzGIZhDRvVzlFsrCuIW-33">
          <mxGeometry x="0.6657" y="2" relative="1" as="geometry">
            <mxPoint as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-59" value="0...*" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" vertex="1" connectable="0" parent="wuzGIZhDRvVzlFsrCuIW-33">
          <mxGeometry x="-0.7737" y="1" relative="1" as="geometry">
            <mxPoint as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-21" value="Texture" style="swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=26;fillColor=none;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;" vertex="1" parent="1">
          <mxGeometry x="30" y="162" width="140" height="78" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-22" value="+ mWidth: float" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" vertex="1" parent="wuzGIZhDRvVzlFsrCuIW-21">
          <mxGeometry y="26" width="140" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-23" value="+ mHeight: float" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" vertex="1" parent="wuzGIZhDRvVzlFsrCuIW-21">
          <mxGeometry y="52" width="140" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-39" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;startArrow=none;startFill=0;endArrow=none;endFill=0;endSize=12;strokeWidth=1;" edge="1" parent="1" source="wuzGIZhDRvVzlFsrCuIW-35" target="wuzGIZhDRvVzlFsrCuIW-17">
          <mxGeometry relative="1" as="geometry">
            <Array as="points">
              <mxPoint x="480" y="470" />
              <mxPoint x="720" y="470" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-40" value="0...*" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" vertex="1" connectable="0" parent="wuzGIZhDRvVzlFsrCuIW-39">
          <mxGeometry x="0.836" y="1" relative="1" as="geometry">
            <mxPoint as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-57" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;startArrow=none;startFill=0;endArrow=diamondThin;endFill=1;endSize=12;strokeWidth=1;" edge="1" parent="1" source="wuzGIZhDRvVzlFsrCuIW-42" target="wuzGIZhDRvVzlFsrCuIW-35">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-63" value="1...1" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" vertex="1" connectable="0" parent="wuzGIZhDRvVzlFsrCuIW-57">
          <mxGeometry x="0.6514" y="1" relative="1" as="geometry">
            <mxPoint as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-64" value="0...*" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" vertex="1" connectable="0" parent="wuzGIZhDRvVzlFsrCuIW-57">
          <mxGeometry x="-0.6857" y="-2" relative="1" as="geometry">
            <mxPoint as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-66" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;startArrow=none;startFill=0;endArrow=diamondThin;endFill=1;endSize=12;strokeWidth=1;" edge="1" parent="1" source="wuzGIZhDRvVzlFsrCuIW-35" target="wuzGIZhDRvVzlFsrCuIW-9">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-67" value="1...1" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" vertex="1" connectable="0" parent="wuzGIZhDRvVzlFsrCuIW-66">
          <mxGeometry x="0.7857" y="3" relative="1" as="geometry">
            <mxPoint as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-68" value="0...*" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" vertex="1" connectable="0" parent="wuzGIZhDRvVzlFsrCuIW-66">
          <mxGeometry x="-0.8102" y="1" relative="1" as="geometry">
            <mxPoint as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-35" value="Animation" style="swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=26;fillColor=none;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;" vertex="1" parent="1">
          <mxGeometry x="310" y="538.1" width="280" height="104" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-36" value="+ mIdx: i32" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" vertex="1" parent="wuzGIZhDRvVzlFsrCuIW-35">
          <mxGeometry y="26" width="280" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-37" value="+ mDurationInSeconds: double" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" vertex="1" parent="wuzGIZhDRvVzlFsrCuIW-35">
          <mxGeometry y="52" width="280" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-38" value="+ mJointKeyframes: map&lt;int, Keyframes&gt;" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" vertex="1" parent="wuzGIZhDRvVzlFsrCuIW-35">
          <mxGeometry y="78" width="280" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-54" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;startArrow=none;startFill=0;endArrow=none;endFill=0;endSize=12;strokeWidth=1;" edge="1" parent="1" source="wuzGIZhDRvVzlFsrCuIW-42" target="wuzGIZhDRvVzlFsrCuIW-46">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-42" value="AnimKeyframes" style="swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=26;fillColor=none;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;" vertex="1" parent="1">
          <mxGeometry x="690" y="538.1" width="190" height="104" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-43" value="+ mTranslation: Keyframes&lt;v3&gt;" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" vertex="1" parent="wuzGIZhDRvVzlFsrCuIW-42">
          <mxGeometry y="26" width="190" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-44" value="+ mRotation: Keyframes&lt;v3&gt;" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" vertex="1" parent="wuzGIZhDRvVzlFsrCuIW-42">
          <mxGeometry y="52" width="190" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-45" value="+ mScale: Keyframes&lt;v3&gt;" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" vertex="1" parent="wuzGIZhDRvVzlFsrCuIW-42">
          <mxGeometry y="78" width="190" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-46" value="Keyframes&lt;T&gt;" style="swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=26;fillColor=none;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;" vertex="1" parent="1">
          <mxGeometry x="990" y="538.1" width="140" height="104" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-47" value="+ mTimes: vector&lt;float&gt;" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" vertex="1" parent="wuzGIZhDRvVzlFsrCuIW-46">
          <mxGeometry y="26" width="140" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-48" value="+ mValues: vector&lt;T&gt;" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" vertex="1" parent="wuzGIZhDRvVzlFsrCuIW-46">
          <mxGeometry y="52" width="140" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-49" value="+ mCount: unsigned int" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" vertex="1" parent="wuzGIZhDRvVzlFsrCuIW-46">
          <mxGeometry y="78" width="140" height="26" as="geometry" />
        </mxCell>
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>
