import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface InspectorAssessmentTargetConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_target.html#name InspectorAssessmentTarget#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_target.html#resource_group_arn InspectorAssessmentTarget#resource_group_arn}.
     */
    readonly resourceGroupArn?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_target.html aws_inspector_assessment_target}.
 */
export declare class InspectorAssessmentTarget extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_target.html aws_inspector_assessment_target} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: InspectorAssessmentTargetConfig);
    get arn(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _resourceGroupArn?;
    get resourceGroupArn(): string;
    set resourceGroupArn(value: string);
    resetResourceGroupArn(): void;
    get resourceGroupArnInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
