import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsAcmCertificateConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/acm_certificate.html#domain DataAwsAcmCertificate#domain}.
     */
    readonly domain: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/acm_certificate.html#key_types DataAwsAcmCertificate#key_types}.
     */
    readonly keyTypes?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/acm_certificate.html#most_recent DataAwsAcmCertificate#most_recent}.
     */
    readonly mostRecent?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/acm_certificate.html#statuses DataAwsAcmCertificate#statuses}.
     */
    readonly statuses?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/acm_certificate.html#tags DataAwsAcmCertificate#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/acm_certificate.html#types DataAwsAcmCertificate#types}.
     */
    readonly types?: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/acm_certificate.html aws_acm_certificate}.
 */
export declare class DataAwsAcmCertificate extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/acm_certificate.html aws_acm_certificate} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsAcmCertificateConfig);
    get arn(): string;
    private _domain;
    get domain(): string;
    set domain(value: string);
    get domainInput(): string;
    get id(): string;
    private _keyTypes?;
    get keyTypes(): string[];
    set keyTypes(value: string[]);
    resetKeyTypes(): void;
    get keyTypesInput(): string[] | undefined;
    private _mostRecent?;
    get mostRecent(): boolean;
    set mostRecent(value: boolean);
    resetMostRecent(): void;
    get mostRecentInput(): boolean | undefined;
    private _statuses?;
    get statuses(): string[];
    set statuses(value: string[]);
    resetStatuses(): void;
    get statusesInput(): string[] | undefined;
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
    private _types?;
    get types(): string[];
    set types(value: string[]);
    resetTypes(): void;
    get typesInput(): string[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
