import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface InspectorAssessmentTemplateConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template.html#duration InspectorAssessmentTemplate#duration}.
     */
    readonly duration: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template.html#name InspectorAssessmentTemplate#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template.html#rules_package_arns InspectorAssessmentTemplate#rules_package_arns}.
     */
    readonly rulesPackageArns: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template.html#tags InspectorAssessmentTemplate#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template.html#tags_all InspectorAssessmentTemplate#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template.html#target_arn InspectorAssessmentTemplate#target_arn}.
     */
    readonly targetArn: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template.html aws_inspector_assessment_template}.
 */
export declare class InspectorAssessmentTemplate extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template.html aws_inspector_assessment_template} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: InspectorAssessmentTemplateConfig);
    get arn(): string;
    private _duration;
    get duration(): number;
    set duration(value: number);
    get durationInput(): number;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _rulesPackageArns;
    get rulesPackageArns(): string[];
    set rulesPackageArns(value: string[]);
    get rulesPackageArnsInput(): string[];
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    private _targetArn;
    get targetArn(): string;
    set targetArn(value: string);
    get targetArnInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
