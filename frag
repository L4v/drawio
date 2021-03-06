<mxfile host="app.diagrams.net" modified="2022-06-24T13:54:27.431Z" agent="5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36" etag="wNYe3YjT3hsTnS-FN-VH" version="20.0.3" type="github">
  <diagram id="wiMfhkj_ppZTtVRItT9S" name="Page-1">
    <mxGraphModel dx="1484" dy="1240" grid="0" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="0" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0">
      <root>
        <mxCell id="0" />
        <mxCell id="1" parent="0" />
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-29" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;startArrow=none;startFill=0;endArrow=diamondThin;endFill=1;strokeWidth=1;endSize=12;" parent="1" source="wuzGIZhDRvVzlFsrCuIW-13" target="wuzGIZhDRvVzlFsrCuIW-9" edge="1">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-62" value="0...*" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" parent="wuzGIZhDRvVzlFsrCuIW-29" vertex="1" connectable="0">
          <mxGeometry x="-0.6907" y="1" relative="1" as="geometry">
            <mxPoint x="-1" as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-9" value="GLTFModel" style="swimlane;fontStyle=1;childLayout=stackLayout;horizontal=1;startSize=26;fillColor=#2ecc71;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;strokeColor=#bdc3c7;" parent="1" vertex="1">
          <mxGeometry x="340" y="150" width="220" height="104" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-10" value="- mTextures: map&lt;string, Texture&gt;" style="text;strokeColor=#bdc3c7;fillColor=#FFFFFF;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="wuzGIZhDRvVzlFsrCuIW-9" vertex="1">
          <mxGeometry y="26" width="220" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-11" value="- mNodes: vector&lt;Node&gt;" style="text;strokeColor=#bdc3c7;fillColor=#FFFFFF;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="wuzGIZhDRvVzlFsrCuIW-9" vertex="1">
          <mxGeometry y="52" width="220" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-12" value="- mJoints: vector&lt;Joint&gt;" style="text;strokeColor=#bdc3c7;fillColor=#FFFFFF;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="wuzGIZhDRvVzlFsrCuIW-9" vertex="1">
          <mxGeometry y="78" width="220" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-13" value="Node" style="swimlane;fontStyle=1;childLayout=stackLayout;horizontal=1;startSize=26;fillColor=#2ecc71;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;strokeColor=#bdc3c7;" parent="1" vertex="1">
          <mxGeometry x="650" y="-19" width="180" height="182" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-14" value="+ mIdx: int" style="text;strokeColor=#bdc3c7;fillColor=#FFFFFF;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="wuzGIZhDRvVzlFsrCuIW-13" vertex="1">
          <mxGeometry y="26" width="180" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-15" value="+ mParentIdx: int" style="text;strokeColor=#bdc3c7;fillColor=#FFFFFF;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="wuzGIZhDRvVzlFsrCuIW-13" vertex="1">
          <mxGeometry y="52" width="180" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-16" value="+ mName: string" style="text;strokeColor=#bdc3c7;fillColor=#FFFFFF;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="wuzGIZhDRvVzlFsrCuIW-13" vertex="1">
          <mxGeometry y="78" width="180" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-70" value="+ mChildren: vector&lt;int&gt;" style="text;strokeColor=#bdc3c7;fillColor=#FFFFFF;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="wuzGIZhDRvVzlFsrCuIW-13" vertex="1">
          <mxGeometry y="104" width="180" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-71" value="+ mLocalTransform: m44" style="text;strokeColor=#bdc3c7;fillColor=#FFFFFF;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="wuzGIZhDRvVzlFsrCuIW-13" vertex="1">
          <mxGeometry y="130" width="180" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-72" value="+ mGlobalTransform: m44" style="text;strokeColor=#bdc3c7;fillColor=#FFFFFF;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="wuzGIZhDRvVzlFsrCuIW-13" vertex="1">
          <mxGeometry y="156" width="180" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-30" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;startArrow=none;startFill=0;endArrow=diamondThin;endFill=1;endSize=12;strokeWidth=1;" parent="1" source="wuzGIZhDRvVzlFsrCuIW-17" target="wuzGIZhDRvVzlFsrCuIW-9" edge="1">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-60" value="1...1" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" parent="wuzGIZhDRvVzlFsrCuIW-30" vertex="1" connectable="0">
          <mxGeometry x="0.6263" y="2" relative="1" as="geometry">
            <mxPoint as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-61" value="0...*" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" parent="wuzGIZhDRvVzlFsrCuIW-30" vertex="1" connectable="0">
          <mxGeometry x="-0.6317" y="-1" relative="1" as="geometry">
            <mxPoint x="-1" as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-17" value="Joint" style="swimlane;fontStyle=1;childLayout=stackLayout;horizontal=1;startSize=26;fillColor=#2ecc71;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;strokeColor=#bdc3c7;" parent="1" vertex="1">
          <mxGeometry x="650" y="240" width="200" height="156" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-18" value="+ mIdx: int" style="text;strokeColor=#bdc3c7;fillColor=#FFFFFF;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="wuzGIZhDRvVzlFsrCuIW-17" vertex="1">
          <mxGeometry y="26" width="200" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-19" value="+ mParentIdx: int" style="text;strokeColor=#bdc3c7;fillColor=#FFFFFF;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="wuzGIZhDRvVzlFsrCuIW-17" vertex="1">
          <mxGeometry y="52" width="200" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-20" value="+ mName: string" style="text;strokeColor=#bdc3c7;fillColor=#FFFFFF;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="wuzGIZhDRvVzlFsrCuIW-17" vertex="1">
          <mxGeometry y="78" width="200" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-73" value="+ mLocalTransform: m44" style="text;strokeColor=#bdc3c7;fillColor=#FFFFFF;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="wuzGIZhDRvVzlFsrCuIW-17" vertex="1">
          <mxGeometry y="104" width="200" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-74" value="+ mInverseBindTransform: m44" style="text;strokeColor=#bdc3c7;fillColor=#FFFFFF;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="wuzGIZhDRvVzlFsrCuIW-17" vertex="1">
          <mxGeometry y="130" width="200" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-33" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;startArrow=none;startFill=0;endArrow=diamondThin;endFill=1;endSize=12;strokeWidth=1;" parent="1" source="wuzGIZhDRvVzlFsrCuIW-21" target="wuzGIZhDRvVzlFsrCuIW-9" edge="1">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-58" value="1...1" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" parent="wuzGIZhDRvVzlFsrCuIW-33" vertex="1" connectable="0">
          <mxGeometry x="0.6657" y="2" relative="1" as="geometry">
            <mxPoint as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-59" value="0...*" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" parent="wuzGIZhDRvVzlFsrCuIW-33" vertex="1" connectable="0">
          <mxGeometry x="-0.7737" y="1" relative="1" as="geometry">
            <mxPoint as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-21" value="Texture" style="swimlane;fontStyle=1;childLayout=stackLayout;horizontal=1;startSize=26;fillColor=#2ecc71;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;strokeColor=#bdc3c7;" parent="1" vertex="1">
          <mxGeometry x="30" y="163" width="140" height="78" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-22" value="+ mWidth: float" style="text;strokeColor=#bdc3c7;fillColor=#FFFFFF;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="wuzGIZhDRvVzlFsrCuIW-21" vertex="1">
          <mxGeometry y="26" width="140" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-23" value="+ mHeight: float" style="text;strokeColor=#bdc3c7;fillColor=#FFFFFF;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="wuzGIZhDRvVzlFsrCuIW-21" vertex="1">
          <mxGeometry y="52" width="140" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-39" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;startArrow=none;startFill=0;endArrow=none;endFill=0;endSize=12;strokeWidth=1;" parent="1" source="wuzGIZhDRvVzlFsrCuIW-35" target="wuzGIZhDRvVzlFsrCuIW-17" edge="1">
          <mxGeometry relative="1" as="geometry">
            <Array as="points">
              <mxPoint x="480" y="470" />
              <mxPoint x="720" y="470" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-40" value="0...*" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" parent="wuzGIZhDRvVzlFsrCuIW-39" vertex="1" connectable="0">
          <mxGeometry x="0.836" y="1" relative="1" as="geometry">
            <mxPoint as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-57" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;startArrow=none;startFill=0;endArrow=diamondThin;endFill=1;endSize=12;strokeWidth=1;" parent="1" source="wuzGIZhDRvVzlFsrCuIW-42" target="wuzGIZhDRvVzlFsrCuIW-35" edge="1">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-63" value="1...1" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" parent="wuzGIZhDRvVzlFsrCuIW-57" vertex="1" connectable="0">
          <mxGeometry x="0.6514" y="1" relative="1" as="geometry">
            <mxPoint as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-64" value="0...*" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" parent="wuzGIZhDRvVzlFsrCuIW-57" vertex="1" connectable="0">
          <mxGeometry x="-0.6857" y="-2" relative="1" as="geometry">
            <mxPoint as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-66" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;startArrow=none;startFill=0;endArrow=diamondThin;endFill=1;endSize=12;strokeWidth=1;" parent="1" source="wuzGIZhDRvVzlFsrCuIW-35" target="wuzGIZhDRvVzlFsrCuIW-9" edge="1">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-67" value="1...1" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" parent="wuzGIZhDRvVzlFsrCuIW-66" vertex="1" connectable="0">
          <mxGeometry x="0.7857" y="3" relative="1" as="geometry">
            <mxPoint as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-68" value="0...*" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" parent="wuzGIZhDRvVzlFsrCuIW-66" vertex="1" connectable="0">
          <mxGeometry x="-0.8102" y="1" relative="1" as="geometry">
            <mxPoint as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-35" value="Animation" style="swimlane;fontStyle=1;childLayout=stackLayout;horizontal=1;startSize=26;fillColor=#2ecc71;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;strokeColor=#bdc3c7;" parent="1" vertex="1">
          <mxGeometry x="310" y="538.1" width="280" height="104" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-36" value="+ mIdx: i32" style="text;strokeColor=#bdc3c7;fillColor=#FFFFFF;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="wuzGIZhDRvVzlFsrCuIW-35" vertex="1">
          <mxGeometry y="26" width="280" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-37" value="+ mDurationInSeconds: double" style="text;strokeColor=#bdc3c7;fillColor=#FFFFFF;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="wuzGIZhDRvVzlFsrCuIW-35" vertex="1">
          <mxGeometry y="52" width="280" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-38" value="+ mJointKeyframes: map&lt;int, Keyframes&gt;" style="text;strokeColor=#bdc3c7;fillColor=#FFFFFF;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="wuzGIZhDRvVzlFsrCuIW-35" vertex="1">
          <mxGeometry y="78" width="280" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-54" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;startArrow=none;startFill=0;endArrow=none;endFill=0;endSize=12;strokeWidth=1;" parent="1" source="wuzGIZhDRvVzlFsrCuIW-42" target="wuzGIZhDRvVzlFsrCuIW-46" edge="1">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-42" value="AnimKeyframes" style="swimlane;fontStyle=1;childLayout=stackLayout;horizontal=1;startSize=26;fillColor=#2ecc71;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;strokeColor=#bdc3c7;" parent="1" vertex="1">
          <mxGeometry x="690" y="538.1" width="190" height="104" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-43" value="+ mTranslation: Keyframes&lt;v3&gt;" style="text;strokeColor=#bdc3c7;fillColor=#FFFFFF;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="wuzGIZhDRvVzlFsrCuIW-42" vertex="1">
          <mxGeometry y="26" width="190" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-44" value="+ mRotation: Keyframes&lt;v3&gt;" style="text;strokeColor=#bdc3c7;fillColor=#FFFFFF;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="wuzGIZhDRvVzlFsrCuIW-42" vertex="1">
          <mxGeometry y="52" width="190" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-45" value="+ mScale: Keyframes&lt;v3&gt;" style="text;strokeColor=#bdc3c7;fillColor=#FFFFFF;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="wuzGIZhDRvVzlFsrCuIW-42" vertex="1">
          <mxGeometry y="78" width="190" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-46" value="Keyframes&lt;T&gt;" style="swimlane;fontStyle=1;childLayout=stackLayout;horizontal=1;startSize=26;fillColor=#2ecc71;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;strokeColor=#bdc3c7;" parent="1" vertex="1">
          <mxGeometry x="990" y="538.1" width="140" height="104" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-47" value="+ mTimes: vector&lt;float&gt;" style="text;strokeColor=#bdc3c7;fillColor=#FFFFFF;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="wuzGIZhDRvVzlFsrCuIW-46" vertex="1">
          <mxGeometry y="26" width="140" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-48" value="+ mValues: vector&lt;T&gt;" style="text;strokeColor=#bdc3c7;fillColor=#FFFFFF;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="wuzGIZhDRvVzlFsrCuIW-46" vertex="1">
          <mxGeometry y="52" width="140" height="26" as="geometry" />
        </mxCell>
        <mxCell id="wuzGIZhDRvVzlFsrCuIW-49" value="+ mCount: unsigned int" style="text;strokeColor=#bdc3c7;fillColor=#FFFFFF;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="wuzGIZhDRvVzlFsrCuIW-46" vertex="1">
          <mxGeometry y="78" width="140" height="26" as="geometry" />
        </mxCell>
        <mxCell id="0ATMyK_Y5k6l5kVY4m8S-1" value="main()" style="html=1;verticalAlign=bottom;startArrow=oval;startFill=1;endArrow=block;startSize=8;rounded=0;" edge="1" parent="1" target="0ATMyK_Y5k6l5kVY4m8S-2">
          <mxGeometry width="60" relative="1" as="geometry">
            <mxPoint x="1245" y="360" as="sourcePoint" />
            <mxPoint x="1305" y="360" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="0ATMyK_Y5k6l5kVY4m8S-2" value=":linux_frag.cpp" style="shape=umlLifeline;perimeter=lifelinePerimeter;whiteSpace=wrap;html=1;container=1;collapsible=0;recursiveResize=0;outlineConnect=0;" vertex="1" parent="1">
          <mxGeometry x="1420" y="300" width="100" height="300" as="geometry" />
        </mxCell>
        <mxCell id="0ATMyK_Y5k6l5kVY4m8S-3" value=":frag.cpp" style="shape=umlLifeline;perimeter=lifelinePerimeter;whiteSpace=wrap;html=1;container=1;collapsible=0;recursiveResize=0;outlineConnect=0;" vertex="1" parent="1">
          <mxGeometry x="1580" y="300" width="100" height="490" as="geometry" />
        </mxCell>
        <mxCell id="0ATMyK_Y5k6l5kVY4m8S-4" value="loop" style="shape=umlFrame;whiteSpace=wrap;html=1;" vertex="1" parent="1">
          <mxGeometry x="1390" y="390" width="300" height="440" as="geometry" />
        </mxCell>
        <mxCell id="0ATMyK_Y5k6l5kVY4m8S-5" value="" style="html=1;points=[];perimeter=orthogonalPerimeter;" vertex="1" parent="1">
          <mxGeometry x="1465" y="360" width="10" height="460" as="geometry" />
        </mxCell>
        <mxCell id="0ATMyK_Y5k6l5kVY4m8S-8" value="break" style="shape=umlFrame;whiteSpace=wrap;html=1;" vertex="1" parent="1">
          <mxGeometry x="1440" y="533" width="120" height="87" as="geometry" />
        </mxCell>
        <mxCell id="0ATMyK_Y5k6l5kVY4m8S-9" value="[Quit]" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;" vertex="1" parent="1">
          <mxGeometry x="1470" y="580" width="60" height="30" as="geometry" />
        </mxCell>
        <mxCell id="0ATMyK_Y5k6l5kVY4m8S-13" value="" style="html=1;points=[];perimeter=orthogonalPerimeter;" vertex="1" parent="1">
          <mxGeometry x="1465" y="420" width="10" height="60" as="geometry" />
        </mxCell>
        <mxCell id="0ATMyK_Y5k6l5kVY4m8S-14" value="glfw callbacks" style="html=1;verticalAlign=bottom;endArrow=block;rounded=0;" edge="1" target="0ATMyK_Y5k6l5kVY4m8S-13" parent="1">
          <mxGeometry relative="1" as="geometry">
            <mxPoint x="1535" y="421" as="sourcePoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="0ATMyK_Y5k6l5kVY4m8S-17" value="" style="html=1;points=[];perimeter=orthogonalPerimeter;" vertex="1" parent="1">
          <mxGeometry x="1625" y="660" width="10" height="80" as="geometry" />
        </mxCell>
        <mxCell id="0ATMyK_Y5k6l5kVY4m8S-18" value="render and update calls" style="html=1;verticalAlign=bottom;endArrow=block;entryX=0;entryY=0;rounded=0;" edge="1" target="0ATMyK_Y5k6l5kVY4m8S-17" parent="1" source="0ATMyK_Y5k6l5kVY4m8S-5">
          <mxGeometry relative="1" as="geometry">
            <mxPoint x="1555" y="660" as="sourcePoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="0ATMyK_Y5k6l5kVY4m8S-24" value="" style="html=1;points=[];perimeter=orthogonalPerimeter;" vertex="1" parent="1">
          <mxGeometry x="1465" y="750" width="10" height="40" as="geometry" />
        </mxCell>
        <mxCell id="0ATMyK_Y5k6l5kVY4m8S-25" value="swap buffers" style="edgeStyle=orthogonalEdgeStyle;html=1;align=left;spacingLeft=2;endArrow=block;rounded=0;entryX=1;entryY=0;" edge="1" target="0ATMyK_Y5k6l5kVY4m8S-24" parent="1">
          <mxGeometry relative="1" as="geometry">
            <mxPoint x="1470" y="730" as="sourcePoint" />
            <Array as="points">
              <mxPoint x="1500" y="730" />
            </Array>
          </mxGeometry>
        </mxCell>
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>
