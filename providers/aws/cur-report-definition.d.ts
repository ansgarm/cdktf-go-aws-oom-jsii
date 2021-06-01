import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CurReportDefinitionConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition.html#additional_artifacts CurReportDefinition#additional_artifacts}.
     */
    readonly additionalArtifacts?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition.html#additional_schema_elements CurReportDefinition#additional_schema_elements}.
     */
    readonly additionalSchemaElements: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition.html#compression CurReportDefinition#compression}.
     */
    readonly compression: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition.html#format CurReportDefinition#format}.
     */
    readonly format: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition.html#refresh_closed_reports CurReportDefinition#refresh_closed_reports}.
     */
    readonly refreshClosedReports?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition.html#report_name CurReportDefinition#report_name}.
     */
    readonly reportName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition.html#report_versioning CurReportDefinition#report_versioning}.
     */
    readonly reportVersioning?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition.html#s3_bucket CurReportDefinition#s3_bucket}.
     */
    readonly s3Bucket: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition.html#s3_prefix CurReportDefinition#s3_prefix}.
     */
    readonly s3Prefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition.html#s3_region CurReportDefinition#s3_region}.
     */
    readonly s3Region: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition.html#time_unit CurReportDefinition#time_unit}.
     */
    readonly timeUnit: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition.html aws_cur_report_definition}.
 */
export declare class CurReportDefinition extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition.html aws_cur_report_definition} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: CurReportDefinitionConfig);
    private _additionalArtifacts?;
    get additionalArtifacts(): string[];
    set additionalArtifacts(value: string[]);
    resetAdditionalArtifacts(): void;
    get additionalArtifactsInput(): string[] | undefined;
    private _additionalSchemaElements;
    get additionalSchemaElements(): string[];
    set additionalSchemaElements(value: string[]);
    get additionalSchemaElementsInput(): string[];
    private _compression;
    get compression(): string;
    set compression(value: string);
    get compressionInput(): string;
    private _format;
    get format(): string;
    set format(value: string);
    get formatInput(): string;
    get id(): string;
    private _refreshClosedReports?;
    get refreshClosedReports(): boolean;
    set refreshClosedReports(value: boolean);
    resetRefreshClosedReports(): void;
    get refreshClosedReportsInput(): boolean | undefined;
    private _reportName;
    get reportName(): string;
    set reportName(value: string);
    get reportNameInput(): string;
    private _reportVersioning?;
    get reportVersioning(): string;
    set reportVersioning(value: string);
    resetReportVersioning(): void;
    get reportVersioningInput(): string | undefined;
    private _s3Bucket;
    get s3Bucket(): string;
    set s3Bucket(value: string);
    get s3BucketInput(): string;
    private _s3Prefix?;
    get s3Prefix(): string;
    set s3Prefix(value: string);
    resetS3Prefix(): void;
    get s3PrefixInput(): string | undefined;
    private _s3Region;
    get s3Region(): string;
    set s3Region(value: string);
    get s3RegionInput(): string;
    private _timeUnit;
    get timeUnit(): string;
    set timeUnit(value: string);
    get timeUnitInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
