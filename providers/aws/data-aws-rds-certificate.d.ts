import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsRdsCertificateConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_certificate.html#latest_valid_till DataAwsRdsCertificate#latest_valid_till}.
     */
    readonly latestValidTill?: boolean;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/rds_certificate.html aws_rds_certificate}.
 */
export declare class DataAwsRdsCertificate extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/rds_certificate.html aws_rds_certificate} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsRdsCertificateConfig);
    get arn(): string;
    get certificateType(): string;
    get customerOverride(): boolean;
    get customerOverrideValidTill(): string;
    get id(): string;
    private _latestValidTill?;
    get latestValidTill(): boolean;
    set latestValidTill(value: boolean);
    resetLatestValidTill(): void;
    get latestValidTillInput(): boolean | undefined;
    get thumbprint(): string;
    get validFrom(): string;
    get validTill(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
