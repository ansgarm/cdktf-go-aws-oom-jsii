import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsGlueScriptConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script.html#language DataAwsGlueScript#language}.
     */
    readonly language?: string;
    /**
     * dag_edge block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script.html#dag_edge DataAwsGlueScript#dag_edge}
     */
    readonly dagEdge: DataAwsGlueScriptDagEdge[];
    /**
     * dag_node block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script.html#dag_node DataAwsGlueScript#dag_node}
     */
    readonly dagNode: DataAwsGlueScriptDagNode[];
}
export interface DataAwsGlueScriptDagEdge {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script.html#source DataAwsGlueScript#source}.
     */
    readonly source: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script.html#target DataAwsGlueScript#target}.
     */
    readonly target: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script.html#target_parameter DataAwsGlueScript#target_parameter}.
     */
    readonly targetParameter?: string;
}
export interface DataAwsGlueScriptDagNodeArgs {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script.html#name DataAwsGlueScript#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script.html#param DataAwsGlueScript#param}.
     */
    readonly param?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script.html#value DataAwsGlueScript#value}.
     */
    readonly value: string;
}
export interface DataAwsGlueScriptDagNode {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script.html#id DataAwsGlueScript#id}.
     */
    readonly id: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script.html#line_number DataAwsGlueScript#line_number}.
     */
    readonly lineNumber?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script.html#node_type DataAwsGlueScript#node_type}.
     */
    readonly nodeType: string;
    /**
     * args block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script.html#args DataAwsGlueScript#args}
     */
    readonly args: DataAwsGlueScriptDagNodeArgs[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/glue_script.html aws_glue_script}.
 */
export declare class DataAwsGlueScript extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/glue_script.html aws_glue_script} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsGlueScriptConfig);
    get id(): string;
    private _language?;
    get language(): string;
    set language(value: string);
    resetLanguage(): void;
    get languageInput(): string | undefined;
    get pythonScript(): string;
    get scalaCode(): string;
    private _dagEdge;
    get dagEdge(): DataAwsGlueScriptDagEdge[];
    set dagEdge(value: DataAwsGlueScriptDagEdge[]);
    get dagEdgeInput(): DataAwsGlueScriptDagEdge[];
    private _dagNode;
    get dagNode(): DataAwsGlueScriptDagNode[];
    set dagNode(value: DataAwsGlueScriptDagNode[]);
    get dagNodeInput(): DataAwsGlueScriptDagNode[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
