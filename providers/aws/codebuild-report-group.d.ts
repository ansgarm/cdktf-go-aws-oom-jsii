import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CodebuildReportGroupConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#delete_reports CodebuildReportGroup#delete_reports}.
     */
    readonly deleteReports?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#name CodebuildReportGroup#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#tags CodebuildReportGroup#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#tags_all CodebuildReportGroup#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#type CodebuildReportGroup#type}.
     */
    readonly type: string;
    /**
     * export_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#export_config CodebuildReportGroup#export_config}
     */
    readonly exportConfig: CodebuildReportGroupExportConfig[];
}
export interface CodebuildReportGroupExportConfigS3Destination {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#bucket CodebuildReportGroup#bucket}.
     */
    readonly bucket: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#encryption_disabled CodebuildReportGroup#encryption_disabled}.
     */
    readonly encryptionDisabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#encryption_key CodebuildReportGroup#encryption_key}.
     */
    readonly encryptionKey: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#packaging CodebuildReportGroup#packaging}.
     */
    readonly packaging?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#path CodebuildReportGroup#path}.
     */
    readonly path?: string;
}
export interface CodebuildReportGroupExportConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#type CodebuildReportGroup#type}.
     */
    readonly type: string;
    /**
     * s3_destination block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#s3_destination CodebuildReportGroup#s3_destination}
     */
    readonly s3Destination?: CodebuildReportGroupExportConfigS3Destination[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html aws_codebuild_report_group}.
 */
export declare class CodebuildReportGroup extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html aws_codebuild_report_group} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: CodebuildReportGroupConfig);
    get arn(): string;
    get created(): string;
    private _deleteReports?;
    get deleteReports(): boolean;
    set deleteReports(value: boolean);
    resetDeleteReports(): void;
    get deleteReportsInput(): boolean | undefined;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
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
    private _type;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    private _exportConfig;
    get exportConfig(): CodebuildReportGroupExportConfig[];
    set exportConfig(value: CodebuildReportGroupExportConfig[]);
    get exportConfigInput(): CodebuildReportGroupExportConfig[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
